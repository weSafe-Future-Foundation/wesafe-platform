import { NextResponse } from "next/server";

// Session cookie config
const COOKIE_NAME = "wesafe-session";
const SESSION_MAX_AGE = 7 * 24 * 60 * 60; // 7 days in seconds

export interface SessionUser {
  id: string;
  name: string;
  phone?: string;
  email?: string;
  role: string;
}

/**
 * Encode user data into a base64 session token.
 * TODO: Replace with proper JWT (jose) for production.
 */
function encodeSession(user: SessionUser): string {
  const payload = {
    ...user,
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + SESSION_MAX_AGE,
  };
  return Buffer.from(JSON.stringify(payload)).toString("base64url");
}

/**
 * Decode a session token back to user data.
 */
export function decodeSession(token: string): SessionUser | null {
  try {
    const payload = JSON.parse(Buffer.from(token, "base64url").toString());
    if (payload.exp && payload.exp < Math.floor(Date.now() / 1000)) {
      return null; // expired
    }
    return {
      id: payload.id,
      name: payload.name,
      phone: payload.phone,
      email: payload.email,
      role: payload.role,
    };
  } catch {
    return null;
  }
}

/**
 * Set session cookie on a NextResponse and return it.
 */
export function setSessionCookie(
  response: NextResponse,
  user: SessionUser
): NextResponse {
  const token = encodeSession(user);
  response.cookies.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_MAX_AGE,
  });
  return response;
}

/**
 * Create a JSON response WITH a session cookie set.
 */
export function jsonWithSession(
  body: Record<string, unknown>,
  user: SessionUser,
  status = 200
): NextResponse {
  const response = NextResponse.json(body, { status });
  return setSessionCookie(response, user);
}
