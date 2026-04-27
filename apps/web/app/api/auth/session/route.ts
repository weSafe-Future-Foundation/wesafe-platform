import { NextRequest, NextResponse } from "next/server";
import { decodeSession } from "@/lib/session";

export async function GET(req: NextRequest) {
  const token = req.cookies.get("wesafe-session")?.value;

  if (!token) {
    return NextResponse.json({ user: null }, { status: 401 });
  }

  const user = decodeSession(token);
  if (!user) {
    return NextResponse.json({ user: null }, { status: 401 });
  }

  return NextResponse.json({ user });
}
