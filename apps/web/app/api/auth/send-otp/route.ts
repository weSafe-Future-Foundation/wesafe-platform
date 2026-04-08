import { NextRequest, NextResponse } from "next/server";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

// In-memory OTP store (will move to Redis/database in production)
// Format: { "+91XXXXXXXXXX": { otp: "123456", expiresAt: Date } }
const otpStore = new Map<string, { otp: string; expiresAt: number }>();

// OTP store is module-scoped; verify-otp has its own instance
// In production, use Redis or database for shared OTP storage

function generateOTP(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function POST(req: NextRequest) {
  try {
    const { phone } = await req.json();

    if (!phone || !/^\d{10}$/.test(phone)) {
      return NextResponse.json({ error: "Invalid phone number." }, { status: 400 });
    }

    const fullPhone = `+91${phone}`;

    // Check if user exists (for login flow)
    if (SUPABASE_URL && SUPABASE_SERVICE_KEY) {
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
    const expiresAt = Date.now() + 5 * 60 * 1000; // 5 minutes

    // Store OTP
    otpStore.set(fullPhone, { otp, expiresAt });

    // TODO: Send OTP via SMS provider (Twilio/MSG91)
    // For now, log it (remove in production)
    console.log(`[DEV] OTP for ${fullPhone}: ${otp}`);

    return NextResponse.json({
      message: "OTP sent successfully.",
      // Remove in production — only for testing
      ...(process.env.NODE_ENV !== "production" ? { devOtp: otp } : {}),
    });
  } catch (error) {
    console.error("Send OTP error:", error);
    return NextResponse.json({ error: "Failed to send OTP." }, { status: 500 });
  }
}
