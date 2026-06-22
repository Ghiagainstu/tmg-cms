import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();
  const adminUser = process.env.ADMIN_USERNAME || "admin";
  const adminPass = process.env.ADMIN_PASSWORD || "tmg2026";

  if (username === adminUser && password === adminPass) {
    const token = Buffer.from(username).toString("base64");
    const res = NextResponse.json({ ok: true });
    res.cookies.set("tmg_session", token, {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      maxAge: 172800,
    });
    return res;
  }

  return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
}

