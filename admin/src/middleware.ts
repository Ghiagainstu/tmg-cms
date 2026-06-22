import { NextRequest, NextResponse } from "next/server";
import { validateToken } from "@/lib/auth";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Public routes - no auth needed
  if (
    pathname.startsWith("/admin/login") ||
    pathname.startsWith("/admin/api/auth/login") ||
    pathname.startsWith("/api/")
  ) {
    return NextResponse.next();
  }

  // All /admin routes require valid session
  if (pathname.startsWith("/admin")) {
    const token = req.cookies.get("tmg_session")?.value;
    if (!token) {
      // API routes return 401, page routes redirect to login
      if (pathname.startsWith("/admin/api/")) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }

    const username = validateToken(token);
    if (!username) {
      // Token invalid or expired
      const res = pathname.startsWith("/admin/api/")
        ? NextResponse.json({ error: "Session expired" }, { status: 401 })
        : NextResponse.redirect(new URL("/admin/login", req.url));
      res.cookies.set("tmg_session", "", { maxAge: 0, path: "/" });
      return res;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
