import { NextRequest, NextResponse } from "next/server";
import { getDb, saveDb } from "@/lib/db";

// POST /admin/api/articles → create or update article
export async function POST(req: NextRequest) {
  const db = await getDb();
  const body = await req.json();
  const { slug, lang, title, excerpt, content, cover_image, category, tags, author, read_time, meta_description, og_image, canonical, status, publish_date } = body;

  if (!slug || !lang) {
    return NextResponse.json({ error: "slug and lang are required" }, { status: 400 });
  }

  const existing = db.exec("SELECT id FROM articles WHERE slug = ? AND lang = ?", [slug, lang]);
  const hasExisting = existing.length && existing[0].values.length;

  if (hasExisting) {
    db.run(
      `UPDATE articles SET title=?, excerpt=?, content=?, cover_image=?, category=?, tags=?, author=?, read_time=?, meta_description=?, og_image=?, canonical=?, status=?, publish_date=?, updated_at=datetime('now')
       WHERE slug=? AND lang=?`,
      [title||"", excerpt||"", content||"", cover_image||"", category||"", JSON.stringify(tags||[]), author||"TMG Team", read_time||"8 min read", meta_description||"", og_image||"", canonical||"", status||"draft", publish_date||"", slug, lang]
    );
  } else {
    db.run(
      `INSERT INTO articles (slug, lang, title, excerpt, content, cover_image, category, tags, author, read_time, meta_description, og_image, canonical, status, publish_date) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
      [slug, lang, title||"", excerpt||"", content||"", cover_image||"", category||"", JSON.stringify(tags||[]), author||"TMG Team", read_time||"8 min read", meta_description||"", og_image||"", canonical||"", status||"draft", publish_date||""]
    );
  }

  saveDb(db);
  return NextResponse.json({ ok: true, slug, lang });
}

// DELETE /admin/api/articles?id=1
export async function DELETE(req: NextRequest) {
  const db = await getDb();
  const id = req.nextUrl.searchParams.get("id");
  if (!id) return NextResponse.json({ error: "id is required" }, { status: 400 });

  db.run("DELETE FROM articles WHERE id = ?", [Number(id)]);
  saveDb(db);
  return NextResponse.json({ ok: true });
}
