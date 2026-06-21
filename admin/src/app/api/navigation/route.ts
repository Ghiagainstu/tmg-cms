import { NextRequest, NextResponse } from "next/server";
import { getDb, getNavigation } from "@/lib/db";

// GET /api/navigation?lang=en
export async function GET(req: NextRequest) {
  const db = await getDb();
  const lang = req.nextUrl.searchParams.get("lang") || "en";
  const nav = getNavigation(db, lang);
  if (!nav) return NextResponse.json({ items: [] });
  
  if (typeof nav.items === "string") {
    try { nav.items = JSON.parse(nav.items); } catch { /* keep as string */ }
  }
  return NextResponse.json(nav);
}
