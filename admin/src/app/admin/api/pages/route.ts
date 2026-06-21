import { NextRequest, NextResponse } from "next/server";
import { getDb, saveDb } from "@/lib/db";

// POST /admin/api/pages → create or update page
export async function POST(req: NextRequest) {
  const db = await getDb();
  const body = await req.json();
  const { slug, lang, title, meta_description, og_image, canonical, status, template, blocks } = body;

  if (!slug || !lang) {
    return NextResponse.json({ error: "slug and lang are required" }, { status: 400 });
  }

  const existing = db.exec("SELECT id FROM pages WHERE slug = ? AND lang = ?", [slug, lang]);
  const hasExisting = existing.length && existing[0].values.length;

  if (hasExisting) {
    db.run(
      `UPDATE pages SET title=?, meta_description=?, og_image=?, canonical=?, status=?, template=?, blocks=?, updated_at=datetime('now')
       WHERE slug=? AND lang=?`,
      [title || "", meta_description || "", og_image || "", canonical || "", status || "draft", template || "default", JSON.stringify(blocks || []), slug, lang]
    );
  } else {
    db.run(
      `INSERT INTO pages (slug, lang, title, meta_description, og_image, canonical, status, template, blocks) VALUES (?,?,?,?,?,?,?,?,?)`,
      [slug, lang, title || "", meta_description || "", og_image || "", canonical || "", status || "draft", template || "default", JSON.stringify(blocks || [])]
    );
  }

  saveDb(db);
  return NextResponse.json({ ok: true, slug, lang });
}

// DELETE /admin/api/pages?id=1
export async function DELETE(req: NextRequest) {
  const db = await getDb();
  const id = req.nextUrl.searchParams.get("id");
  if (!id) return NextResponse.json({ error: "id is required" }, { status: 400 });

  db.run("DELETE FROM pages WHERE id = ?", [Number(id)]);
  saveDb(db);
  return NextResponse.json({ ok: true });
}
