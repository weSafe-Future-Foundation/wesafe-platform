import { NextRequest, NextResponse } from "next/server";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const FAST2SMS_API_KEY = process.env.FAST2SMS_API_KEY;

function generateOTP(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

// Returns { success: boolean, debug: string } for diagnostics
async function sendSMSviaFast2SMS(phone: string, otp: string): Promise<{ success: boolean; debug: string }> {
  if (!FAST2SMS_API_KEY) {
    return { success: false, debug: "FAST2SMS_API_KEY not set" };
  }

  try {
    const payload = {
      route: "otp",
      variables_values: otp,
      flash: 0,
      numbers: phone,
    };

    const res = await fetch("https://www.fast2sms.com/dev/bulkV2", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: FAST2SMS_API_KEY,
      },
      body: JSON.stringify(payload),
    });

    const responseText = await res.text();
    let data;
    try {
      data = JSON.parse(responseText);
    } catch {
      return { success: false, debug: `Fast2SMS non-JSON response (${res.status}): ${responseText.slice(0, 200)}` };
    }

    console.log("[OTP] Fast2SMS response:", JSON.stringify(data));

    if (data.return === true) {
      return { success: true, debug: "SMS sent successfully" };
    }

    return { success: false, debug: `Fast2SMS error: ${JSON.stringify(data).slice(0, 300)}` };
  } catch (error) {
    return { success: false, debug: `Fast2SMS fetch error: ${error instanceof Error ? error.message : String(error)}` };
  }
}

async function storeOTPInDB(phone: string, otp: string): Promise<boolean> {
  if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) return false;

  const fullPhone = `+91${phone}`;
  const expiresAt = new Date(Date.now() + 5 * 60 * 1000).toISOString(); // 5 min

  // Delete any existing OTP for this phone first
  await fetch(
    `${SUPABASE_URL}/rest/v1/otp_verifications?phone=eq.${encodeURIComponent(fullPhone)}`,
    {
      method: "DELETE",
      headers: {
        apikey: SUPABASE_SERVICE_KEY,
        Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`,
      },
    }
  );

  // Insert new OTP
  const res = await fetch(`${SUPABASE_URL}/rest/v1/otp_verifications`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: SUPABASE_SERVICE_KEY,
      Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`,
      Prefer: "return=representation",
    },
    body: JSON.stringify({
      phone: fullPhone,
      otp,
      expiresAt,
      attempts: 0,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    console.error("[OTP] DB store error:", err);
    return false;
  }

  return true;
}

export async function POST(req: NextRequest) {
  try {
    const { phone, purpose } = await req.json();

    if (!phone || !/^\d{10}$/.test(phone)) {
      return NextResponse.json({ error: "Invalid phone number." }, { status: 400 });
    }

    // For login flow, check if user exists
    if (purpose === "login" && SUPABASE_URL && SUPABASE_SERVICE_KEY) {
      const fullPhone = `+91${phone}`;
      const checkRes = await fetch(
        `${SUPABASE_URL}/rest/v1/users?phone=eq.${encodeURIComponent(fullPhone)}&select=id`,
        {
          headers: {
            apikey: SUPABASE_SERVICE_KEY,
            Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`,
          },
        }
      );
      const existing = await checkRes.json();
      if (!Array.isArray(existing) || existing.length === 0) {
        return NextResponse.json(
          { error: "No account found with this phone number. Please register first." },
          { status: 404 }
        );
      }
    }

    // Generate OTP
    const otp = generateOTP();

    // Store OTP in database (not in-memory — serverless safe)
    const stored = await storeOTPInDB(phone, otp);
    if (!stored) {
      return NextResponse.json({ error: "Failed to process OTP. Please try again." }, { status: 500 });
    }

    // Send OTP via Fast2SMS
    const smsResult = await sendSMSviaFast2SMS(phone, otp);

    // TEMPORARY: Return debug info to diagnose SMS delivery issues
    // TODO: Remove debug field once SMS is confirmed working
    return NextResponse.json({
      message: smsResult.success ? "OTP sent successfully to your phone." : "OTP generated.",
      smsSent: smsResult.success,
      debug: smsResult.debug,
      otp, // TEMPORARY: for testing — remove in production
    });
  } catch (error) {
    console.error("Send OTP error:", error);
    return NextResponse.json({ error: "Failed to send OTP." }, { status: 500 });
  }
}
