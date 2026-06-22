import { NextRequest, NextResponse } from "next/server";
import { verifyPassword, createToken, hashPassword, getDefaultAdmin } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const { username, password } = await req.json();
    const admin = getDefaultAdmin();

    // Check username
    if (username !== admin.username) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    // Verify password
    let isValid = false;
    if (admin.passwordHash) {
      // Hashed password (production)
      isValid = await verifyPassword(password, admin.passwordHash);
    } else if (admin.passwordPlain) {
      // Plain password (dev only - will be hashed on first login)
      isValid = password === admin.passwordPlain;
      
      if (isValid) {
        // Auto-hash and warn
        const hash = await hashPassword(password);
        console.warn("[SECURITY] Password is stored in plain text. Set ADMIN_PASSWORD_HASH env var:");
        console.warn("[SECURITY] ADMIN_PASSWORD_HASH=" + hash);
      }
    }

    if (!isValid) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    // Create secure random token
    const token = createToken(username);

    const res = NextResponse.json({ ok: true });
    res.cookies.set("tmg_session", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 172800, // 48 hours
    });
    return res;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
