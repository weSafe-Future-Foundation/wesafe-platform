import { NextRequest, NextResponse } from "next/server";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required." }, { status: 400 });
    }

    if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
      return NextResponse.json({ error: "Server configuration error." }, { status: 500 });
    }

    // Find user by email
    const userRes = await fetch(
      `${SUPABASE_URL}/rest/v1/users?email=eq.${encodeURIComponent(email)}&select=id,email,name,role,passwordHash,isActive,isVerified`,
      {
        headers: {
          apikey: SUPABASE_SERVICE_KEY,
          Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`,
        },
      }
    );
    const users = await userRes.json();

    if (!Array.isArray(users) || users.length === 0) {
      return NextResponse.json({ error: "No account found with this email." }, { status: 404 });
    }

    const user = users[0];

    if (!user.isActive) {
      return NextResponse.json({ error: "This account has been deactivated." }, { status: 403 });
    }

    // TODO: Use bcrypt for proper password comparison
    // For now, simple comparison (will be replaced)
    if (user.passwordHash !== password) {
      return NextResponse.json({ error: "Invalid password." }, { status: 401 });
    }

    // Update last login
    await fetch(
      `${SUPABASE_URL}/rest/v1/users?id=eq.${user.id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          apikey: SUPABASE_SERVICE_KEY,
          Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`,
        },
        body: JSON.stringify({ lastLoginAt: new Date().toISOString() }),
      }
    );

    // TODO: Create proper JWT session token via NextAuth
    // For now, return user data — will integrate with NextAuth signIn
    return NextResponse.json({
      message: "Login successful!",
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "An unexpected error occurred." }, { status: 500 });
  }
}
