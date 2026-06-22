import { NextRequest, NextResponse } from "next/server";
import { deleteToken } from "@/lib/auth";

export async function POST(req: NextRequest) {
  const token = req.cookies.get("tmg_session")?.value;
  if (token) {
    deleteToken(token);
  }

  const res = NextResponse.json({ ok: true });
  res.cookies.set("tmg_session", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
  return res;
}
