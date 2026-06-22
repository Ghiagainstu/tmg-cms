import { NextRequest, NextResponse } from "next/server";
import { getDb, getAllArticles, getArticle } from "@/lib/db";

// GET /api/articles                → list articles (optional ?lang=en&status=published)
// GET /api/articles?slug=xxx&lang=en → get single article
export async function GET(req: NextRequest) {
  const db = await getDb();
  const slug = req.nextUrl.searchParams.get("slug");
  const lang = req.nextUrl.searchParams.get("lang") || "en";
  const status = req.nextUrl.searchParams.get("status") || undefined;

  if (slug) {
    const article = getArticle(db, slug, lang);
    if (!article) return NextResponse.json({ error: "Not found" }, { status: 404 });
    // Parse JSON fields
    if (typeof article.tags === "string") {
      try { article.tags = JSON.parse(article.tags); } catch { /* keep as string */ }
    }
    return NextResponse.json(article);
  }

  const articles = getAllArticles(db, lang, status);
  return NextResponse.json(articles);
}
