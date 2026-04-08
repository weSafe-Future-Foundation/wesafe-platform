import { NextRequest, NextResponse } from "next/server";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const FAST2SMS_API_KEY = process.env.FAST2SMS_API_KEY;

function generateOTP(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

async function sendSMSviaFast2SMS(phone: string, otp: string): Promise<boolean> {
  if (!FAST2SMS_API_KEY) {
    console.warn("[OTP] FAST2SMS_API_KEY not set — OTP not sent via SMS");
    return false;
  }

  try {
    const res = await fetch("https://www.fast2sms.com/dev/bulkV2", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: FAST2SMS_API_KEY,
      },
      body: JSON.stringify({
        route: "otp",
        variables_values: otp,
        flash: 0,
        numbers: phone, // 10-digit number without +91
      }),
    });

    const data = await res.json();
    console.log("[OTP] Fast2SMS response:", JSON.stringify(data));

    return data.return === true;
  } catch (error) {
    console.error("[OTP] Fast2SMS error:", error);
    return false;
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
    const sent = await sendSMSviaFast2SMS(phone, otp);

    if (sent) {
      return NextResponse.json({ message: "OTP sent successfully to your phone." });
    }

    // If Fast2SMS not configured or failed, return OTP in dev mode for testing
    console.log(`[DEV] OTP for +91${phone}: ${otp}`);
    return NextResponse.json({
      message: "OTP generated. Check your phone.",
      // In dev/testing, include OTP in response if SMS provider isn't configured
      ...((!FAST2SMS_API_KEY || process.env.NODE_ENV !== "production") ? { devOtp: otp } : {}),
    });
  } catch (error) {
    console.error("Send OTP error:", error);
    return NextResponse.json({ error: "Failed to send OTP." }, { status: 500 });
  }
}
