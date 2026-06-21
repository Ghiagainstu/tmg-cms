import { NextRequest, NextResponse } from "next/server";
import { getDb, getSiteConfig } from "@/lib/db";

// GET /api/config?lang=en
export async function GET(req: NextRequest) {
  const db = await getDb();
  const lang = req.nextUrl.searchParams.get("lang") || "en";
  const config = getSiteConfig(db, lang);
  if (!config) return NextResponse.json({ error: "Not found" }, { status: 404 });
  
  // Parse JSON fields
  for (const field of ["footer_links", "footer_platforms", "social_links"]) {
    if (typeof config[field] === "string") {
      try { config[field] = JSON.parse(config[field]); } catch { /* keep as string */ }
    }
  }
  return NextResponse.json(config);
}
