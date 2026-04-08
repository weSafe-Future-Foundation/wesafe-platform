import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Routes that require authentication
const protectedRoutes = [
  "/community/dashboard",
  "/community/badges",
  "/community/certificates",
];

// Routes that are always public
const publicRoutes = [
  "/community",
  "/community/register",
  "/community/login",
  "/community/leaderboard",
  "/community/events",
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if route needs protection
  const isProtected = protectedRoutes.some(
    (route) => pathname === route || pathname.startsWith(route + "/")
  );

  if (!isProtected) {
    return NextResponse.next();
  }

  // Check for auth session
  // NextAuth stores session token in cookies
  const sessionToken =
    request.cookies.get("next-auth.session-token")?.value ||
    request.cookies.get("__Secure-next-auth.session-token")?.value;

  // Also check for a custom session cookie (for OTP-based auth)
  const customSession = request.cookies.get("wesafe-session")?.value;

  if (!sessionToken && !customSession) {
    // Redirect to login with callback URL
    const loginUrl = new URL("/community/login", request.url);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/community/:path*"],
};
