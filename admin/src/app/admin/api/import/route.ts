import { NextResponse } from "next/server";
import { importArticles } from "@/lib/import-articles";

// POST /admin/api/import → batch import articles from topics_data.json
export async function POST() {
  try {
    const result = await importArticles();
    return NextResponse.json({
      ok: true,
      message: `Import complete: ${result.imported} imported, ${result.skipped} skipped, ${result.total} total`,
      ...result,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
