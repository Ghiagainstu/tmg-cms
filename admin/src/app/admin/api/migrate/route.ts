import { NextResponse } from "next/server";
import { migrateHtml } from "@/lib/migrate-html";

// POST /admin/api/migrate — migrate HTML articles into CMS
export async function POST() {
  try {
    const result = await migrateHtml();
    return NextResponse.json({
      ok: true,
      message: `Migration complete: ${result.migrated} migrated, ${result.skipped} skipped`,
      ...result,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
