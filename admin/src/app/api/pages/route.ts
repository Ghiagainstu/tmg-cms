import { NextRequest, NextResponse } from "next/server";
import { getDb, getAllPages, getPage } from "@/lib/db";

// GET /api/pages          → list all pages (optional ?lang=en)
// GET /api/pages?slug=home&lang=en → get single page
export async function GET(req: NextRequest) {
  const db = await getDb();
  const slug = req.nextUrl.searchParams.get("slug");
  const lang = req.nextUrl.searchParams.get("lang") || "en";

  if (slug) {
    const page = getPage(db, slug, lang);
    if (!page) return NextResponse.json({ error: "Not found" }, { status: 404 });
    // Parse blocks JSON
    if (typeof page.blocks === "string") {
      try { page.blocks = JSON.parse(page.blocks); } catch { /* keep as string */ }
    }
    return NextResponse.json(page);
  }

  const pages = getAllPages(db, lang || undefined);
  return NextResponse.json(pages);
}
