import { NextRequest, NextResponse } from "next/server";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

// Shared OTP store — in production, use Redis or database
// This is a module-level Map that persists within the same serverless instance
const otpStore = new Map<string, { otp: string; expiresAt: number }>();

// Re-export for send-otp to use (in serverless, they may share the same instance)
export { otpStore };

export async function POST(req: NextRequest) {
  try {
    const { identifier, otp, method } = await req.json();

    if (!identifier || !otp) {
      return NextResponse.json({ error: "Missing verification data." }, { status: 400 });
    }

    const key = method === "phone" ? `+91${identifier}` : identifier;

    // Check OTP store
    const stored = otpStore.get(key);
    if (!stored) {
      return NextResponse.json({ error: "OTP expired or not found. Please request a new one." }, { status: 400 });
    }

    if (Date.now() > stored.expiresAt) {
      otpStore.delete(key);
      return NextResponse.json({ error: "OTP has expired. Please request a new one." }, { status: 400 });
    }

    if (stored.otp !== otp) {
      return NextResponse.json({ error: "Incorrect OTP. Please try again." }, { status: 400 });
    }

    // OTP verified — clean up
    otpStore.delete(key);

    // Mark user as verified in database
    if (SUPABASE_URL && SUPABASE_SERVICE_KEY) {
      const field = method === "phone" ? "phone" : "email";
      const value = method === "phone" ? `+91${identifier}` : identifier;

      await fetch(
        `${SUPABASE_URL}/rest/v1/users?${field}=eq.${encodeURIComponent(value)}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            apikey: SUPABASE_SERVICE_KEY,
            Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`,
          },
          body: JSON.stringify({ isVerified: true }),
        }
      );
    }

    // TODO: Create a session/JWT token for the user
    // For now, return success — frontend will redirect to dashboard
    return NextResponse.json({
      message: "Verification successful!",
      verified: true,
    });
  } catch (error) {
    console.error("Verify OTP error:", error);
    return NextResponse.json({ error: "Verification failed." }, { status: 500 });
  }
}
