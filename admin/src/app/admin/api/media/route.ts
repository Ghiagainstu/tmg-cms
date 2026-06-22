import { NextRequest, NextResponse } from "next/server";
import { getDb, saveDb } from "@/lib/db";
import fs from "fs";
import path from "path";

const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads");

// GET /admin/api/media — list all media
export async function GET() {
  const db = await getDb();
  const rows = db.exec("SELECT * FROM media ORDER BY created_at DESC");
  const items = rows.length ? rows[0].values.map((row) => {
    const obj: Record<string, unknown> = {};
    rows[0].columns.forEach((col, i) => { obj[col] = row[i]; });
    return obj;
  }) : [];
  return NextResponse.json(items);
}

// POST /admin/api/media — upload file
export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get("file") as File | null;
  const alt = (formData.get("alt") as string) || "";

  if (!file) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }

  // Validate type
  const allowedTypes = ["image/jpeg", "image/png", "image/gif", "image/webp", "image/svg+xml"];
  if (!allowedTypes.includes(file.type)) {
    return NextResponse.json({ error: "Invalid file type. Allowed: jpg, png, gif, webp, svg" }, { status: 400 });
  }

  // Validate size (max 10MB)
  if (file.size > 10 * 1024 * 1024) {
    return NextResponse.json({ error: "File too large. Max 10MB" }, { status: 400 });
  }

  // Generate unique filename
  const ext = file.name.split(".").pop() || "jpg";
  const timestamp = Date.now();
  const safeName = file.name.replace(/[^a-zA-Z0-9.-]/g, "_").replace(/\.[^.]+$/, "");
  const filename = `${safeName}_${timestamp}.${ext}`;

  // Ensure upload dir exists
  if (!fs.existsSync(UPLOAD_DIR)) {
    fs.mkdirSync(UPLOAD_DIR, { recursive: true });
  }

  // Save file
  const buffer = Buffer.from(await file.arrayBuffer());
  const filePath = path.join(UPLOAD_DIR, filename);
  fs.writeFileSync(filePath, buffer);

  // Save to database
  const db = await getDb();
  db.run(
    "INSERT INTO media (filename, original_name, mime_type, alt) VALUES (?, ?, ?, ?)",
    [filename, file.name, file.type, alt]
  );
  saveDb(db);

  return NextResponse.json({
    ok: true,
    url: `/uploads/${filename}`,
    filename,
    original_name: file.name,
  });
}

// DELETE /admin/api/media?id=1
export async function DELETE(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  if (!id) return NextResponse.json({ error: "id required" }, { status: 400 });

  const db = await getDb();
  const rows = db.exec("SELECT filename FROM media WHERE id = ?", [Number(id)]);
  if (rows.length && rows[0].values.length) {
    const filename = rows[0].values[0][0] as string;
    const filePath = path.join(UPLOAD_DIR, filename);
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
  }
  db.run("DELETE FROM media WHERE id = ?", [Number(id)]);
  saveDb(db);
  return NextResponse.json({ ok: true });
}
