import { NextRequest, NextResponse } from "next/server";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, password, role, authMethod, college, degree, graduationYear, companyName, designation } = body;

    if (!name || !role) {
      return NextResponse.json({ error: "Name and role are required." }, { status: 400 });
    }

    if (authMethod === "email" && (!email || !password)) {
      return NextResponse.json({ error: "Email and password are required." }, { status: 400 });
    }

    if (authMethod === "phone" && !phone) {
      return NextResponse.json({ error: "Phone number is required." }, { status: 400 });
    }

    if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
      return NextResponse.json({ error: "Server configuration error." }, { status: 500 });
    }

    // Check if user already exists
    // For phone signup, use +91 prefix to match stored format
    const field = authMethod === "phone" ? "phone" : "email";
    const identifier = authMethod === "phone" ? `+91${phone}` : email;

    const checkRes = await fetch(
      `${SUPABASE_URL}/rest/v1/users?${field}=eq.${encodeURIComponent(identifier)}&select=id`,
      {
        headers: {
          apikey: SUPABASE_SERVICE_KEY,
          Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`,
        },
      }
    );
    const existing = await checkRes.json();
    if (Array.isArray(existing) && existing.length > 0) {
      return NextResponse.json(
        { error: `An account with this ${field} already exists. Please log in.` },
        { status: 409 }
      );
    }

    // Hash password (basic for now — will use bcrypt in production)
    // TODO: Replace with bcrypt
    const passwordHash = authMethod === "email" ? password : null;

    // Build user payload — only include fields that have values
    // This avoids NOT NULL constraint violations for optional fields
    const userPayload: Record<string, unknown> = {
      name,
      role,
      authProvider: authMethod === "phone" ? "PHONE" : "EMAIL",
      isVerified: false,
      isActive: true,
    };

    // Only include email if provided (column may have NOT NULL constraint)
    if (email) {
      userPayload.email = email;
    }

    // Phone always stored with +91 prefix
    if (phone) {
      userPayload.phone = `+91${phone}`;
    }

    // Password hash only for email signups
    if (passwordHash) {
      userPayload.passwordHash = passwordHash;
    }

    // Create user
    const userRes = await fetch(`${SUPABASE_URL}/rest/v1/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: SUPABASE_SERVICE_KEY,
        Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`,
        Prefer: "return=representation",
      },
      body: JSON.stringify(userPayload),
    });

    if (!userRes.ok) {
      const err = await userRes.text();
      console.error("User creation error:", userRes.status, err);
      // Return more specific error for debugging
      const errorMsg = err.includes("unique") || err.includes("duplicate")
        ? "An account with these details already exists."
        : err.includes("null value") || err.includes("not-null")
        ? "Missing required field. Please fill all required fields."
        : "Failed to create account. Please try again.";
      return NextResponse.json({ error: errorMsg }, { status: 500 });
    }

    const [newUser] = await userRes.json();

    // Create role-specific profile
    if (role === "STUDENT" && newUser?.id) {
      await fetch(`${SUPABASE_URL}/rest/v1/student_profiles`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_SERVICE_KEY,
          Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`,
        },
        body: JSON.stringify({
          userId: newUser.id,
          college: college || null,
          degree: degree || null,
          graduationYear: graduationYear ? parseInt(graduationYear) : null,
        }),
      });
    }

    // TODO: Send verification email/OTP
    // For email: send verification link via Resend
    // For phone: send OTP via Twilio/MSG91

    return NextResponse.json({
      message: "Account created! Please verify your " + (authMethod === "phone" ? "phone number" : "email") + ".",
      userId: newUser?.id,
    });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json({ error: "An unexpected error occurred." }, { status: 500 });
  }
}
