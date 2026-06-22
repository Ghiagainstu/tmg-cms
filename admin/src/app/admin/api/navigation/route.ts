import { NextResponse } from "next/server";
import { getDb, saveDb } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const { lang, items } = await request.json();
    if (!lang || !Array.isArray(items)) {
      return NextResponse.json({ error: "Missing lang or items" }, { status: 400 });
    }

    const db = await getDb();
    db.run(
      "INSERT OR REPLACE INTO navigation (lang, items, updated_at) VALUES (?, ?, datetime('now'))",
      [lang, JSON.stringify(items)]
    );
    saveDb(db);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Navigation save error:", error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
