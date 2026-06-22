import { NextResponse } from "next/server";
import { seed } from "@/lib/seed";

// POST /admin/api/seed → seed the database with initial TMG site structure
export async function POST() {
  try {
    await seed();
    return NextResponse.json({ ok: true, message: "Database seeded successfully" });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
