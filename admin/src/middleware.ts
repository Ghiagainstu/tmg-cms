import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Don't protect login page, auth API, or public API
  if (
    pathname.startsWith("/admin/login") ||
    pathname.startsWith("/admin/api/auth") ||
    pathname.startsWith("/api/")
  ) {
    return NextResponse.next();
  }

  // Protect all other /admin routes
  if (pathname.startsWith("/admin")) {
    const session = req.cookies.get("tmg_session");
    if (!session) {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
