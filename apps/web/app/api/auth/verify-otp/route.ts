import { NextRequest, NextResponse } from "next/server";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

const MAX_ATTEMPTS = 5; // Max wrong OTP attempts before invalidation

export async function POST(req: NextRequest) {
  try {
    const { identifier, otp, method } = await req.json();

    if (!identifier || !otp) {
      return NextResponse.json({ error: "Missing verification data." }, { status: 400 });
    }

    if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
      return NextResponse.json({ error: "Server configuration error." }, { status: 500 });
    }

    const key = method === "phone" ? `+91${identifier}` : identifier;

    // Fetch OTP from database
    const otpRes = await fetch(
      `${SUPABASE_URL}/rest/v1/otp_verifications?phone=eq.${encodeURIComponent(key)}&select=*&order=createdAt.desc&limit=1`,
      {
        headers: {
          apikey: SUPABASE_SERVICE_KEY,
          Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`,
        },
      }
    );

    const otpRecords = await otpRes.json();

    if (!Array.isArray(otpRecords) || otpRecords.length === 0) {
      return NextResponse.json(
        { error: "OTP expired or not found. Please request a new one." },
        { status: 400 }
      );
    }

    const record = otpRecords[0];

    // Check expiry
    if (new Date(record.expiresAt).getTime() < Date.now()) {
      // Delete expired OTP
      await fetch(
        `${SUPABASE_URL}/rest/v1/otp_verifications?id=eq.${record.id}`,
        {
          method: "DELETE",
          headers: {
            apikey: SUPABASE_SERVICE_KEY,
            Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`,
          },
        }
      );
      return NextResponse.json(
        { error: "OTP has expired. Please request a new one." },
        { status: 400 }
      );
    }

    // Check max attempts
    if (record.attempts >= MAX_ATTEMPTS) {
      await fetch(
        `${SUPABASE_URL}/rest/v1/otp_verifications?id=eq.${record.id}`,
        {
          method: "DELETE",
          headers: {
            apikey: SUPABASE_SERVICE_KEY,
            Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`,
          },
        }
      );
      return NextResponse.json(
        { error: "Too many failed attempts. Please request a new OTP." },
        { status: 429 }
      );
    }

    // Verify OTP
    if (record.otp !== otp) {
      // Increment attempts
      await fetch(
        `${SUPABASE_URL}/rest/v1/otp_verifications?id=eq.${record.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            apikey: SUPABASE_SERVICE_KEY,
            Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`,
          },
          body: JSON.stringify({ attempts: record.attempts + 1 }),
        }
      );
      return NextResponse.json(
        { error: "Incorrect OTP. Please try again." },
        { status: 400 }
      );
    }

    // OTP verified — delete it
    await fetch(
      `${SUPABASE_URL}/rest/v1/otp_verifications?id=eq.${record.id}`,
      {
        method: "DELETE",
        headers: {
          apikey: SUPABASE_SERVICE_KEY,
          Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`,
        },
      }
    );

    // Mark user as verified in database
    const field = method === "phone" ? "phone" : "email";
    await fetch(
      `${SUPABASE_URL}/rest/v1/users?${field}=eq.${encodeURIComponent(key)}`,
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

    // TODO: Create a session/JWT token for the user
    return NextResponse.json({
      message: "Verification successful!",
      verified: true,
    });
  } catch (error) {
    console.error("Verify OTP error:", error);
    return NextResponse.json({ error: "Verification failed." }, { status: 500 });
  }
}
