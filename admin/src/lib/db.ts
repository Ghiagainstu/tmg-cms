// CMS Database Layer - SQLite via sql.js (pure JS, no native deps)
import initSqlJs, { Database } from "sql.js";
import fs from "fs";
import path from "path";

const DB_PATH = path.join(process.cwd(), "data", "tmg-cms.sqlite");

let _db: Database | null = null;

export async function getDb(): Promise<Database> {
  if (_db) return _db;
  
  const SQL = await initSqlJs();
  
  // Ensure data directory exists
  const dataDir = path.dirname(DB_PATH);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  
  // Load or create database
  if (fs.existsSync(DB_PATH)) {
    const buffer = fs.readFileSync(DB_PATH);
    _db = new SQL.Database(buffer);
  } else {
    _db = new SQL.Database();
  }
  
  // Initialize schema
  initSchema(_db);
  
  return _db;
}

function initSchema(db: Database) {
  db.run(`
    CREATE TABLE IF NOT EXISTS pages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      slug TEXT NOT NULL,
      lang TEXT NOT NULL DEFAULT 'en',
      title TEXT NOT NULL DEFAULT '',
      meta_description TEXT DEFAULT '',
      og_image TEXT DEFAULT '',
      canonical TEXT DEFAULT '',
      status TEXT NOT NULL DEFAULT 'draft',
      template TEXT NOT NULL DEFAULT 'default',
      blocks TEXT NOT NULL DEFAULT '[]',
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now')),
      UNIQUE(slug, lang)
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS articles (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      slug TEXT NOT NULL,
      lang TEXT NOT NULL DEFAULT 'en',
      title TEXT NOT NULL DEFAULT '',
      excerpt TEXT DEFAULT '',
      content TEXT DEFAULT '',
      cover_image TEXT DEFAULT '',
      category TEXT DEFAULT '',
      tags TEXT DEFAULT '[]',
      author TEXT DEFAULT 'TMG Team',
      read_time TEXT DEFAULT '8 min read',
      meta_description TEXT DEFAULT '',
      og_image TEXT DEFAULT '',
      canonical TEXT DEFAULT '',
      status TEXT NOT NULL DEFAULT 'draft',
      publish_date TEXT DEFAULT '',
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now')),
      UNIQUE(slug, lang)
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS navigation (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      lang TEXT NOT NULL DEFAULT 'en',
      items TEXT NOT NULL DEFAULT '[]',
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now')),
      UNIQUE(lang)
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS site_config (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      lang TEXT NOT NULL DEFAULT 'en',
      logo_url TEXT DEFAULT '',
      logo_text TEXT DEFAULT 'TMG',
      footer_description TEXT DEFAULT '',
      footer_links TEXT DEFAULT '[]',
      footer_platforms TEXT DEFAULT '[]',
      contact_email TEXT DEFAULT 'tmg@tuyuesouxin.cn',
      announcement TEXT DEFAULT '',
      social_links TEXT DEFAULT '{}',
      ga_id TEXT DEFAULT 'G-P5RQGYPTGP',
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now')),
      UNIQUE(lang)
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS media (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      filename TEXT NOT NULL,
      original_name TEXT NOT NULL,
      mime_type TEXT NOT NULL,
      width INTEGER DEFAULT 0,
      height INTEGER DEFAULT 0,
      alt TEXT DEFAULT '',
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT NOT NULL UNIQUE,
      password_hash TEXT NOT NULL,
      role TEXT NOT NULL DEFAULT 'editor',
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )
  `);

  saveDb(db);
}

export function saveDb(db: Database) {
  const data = db.export();
  const buffer = Buffer.from(data);
  const dataDir = path.dirname(DB_PATH);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  fs.writeFileSync(DB_PATH, buffer);
}

// ─── Query Helpers ───

export function getAllPages(db: Database, lang?: string) {
  const sql = lang
    ? "SELECT * FROM pages WHERE lang = ? ORDER BY updated_at DESC"
    : "SELECT * FROM pages ORDER BY lang, slug";
  const rows = lang ? db.exec(sql, [lang]) : db.exec(sql);
  return rowsToObjects(rows);
}

export function getPage(db: Database, slug: string, lang: string) {
  const rows = db.exec("SELECT * FROM pages WHERE slug = ? AND lang = ?", [slug, lang]);
  const results = rowsToObjects(rows);
  return results[0] || null;
}

export function getAllArticles(db: Database, lang?: string, status?: string) {
  let sql = "SELECT * FROM articles WHERE 1=1";
  const params: string[] = [];
  if (lang) { sql += " AND lang = ?"; params.push(lang); }
  if (status) { sql += " AND status = ?"; params.push(status); }
  sql += " ORDER BY publish_date DESC, updated_at DESC";
  const rows = db.exec(sql, params);
  return rowsToObjects(rows);
}

export function getArticle(db: Database, slug: string, lang: string) {
  const rows = db.exec("SELECT * FROM articles WHERE slug = ? AND lang = ?", [slug, lang]);
  const results = rowsToObjects(rows);
  return results[0] || null;
}

export function getNavigation(db: Database, lang: string) {
  const rows = db.exec("SELECT * FROM navigation WHERE lang = ?", [lang]);
  const results = rowsToObjects(rows);
  return results[0] || null;
}

export function getSiteConfig(db: Database, lang: string) {
  const rows = db.exec("SELECT * FROM site_config WHERE lang = ?", [lang]);
  const results = rowsToObjects(rows);
  return results[0] || null;
}

// ─── Utility ───

function rowsToObjects(result: { columns: string[]; values: unknown[][] }[]) {
  if (!result.length) return [];
  const { columns, values } = result[0];
  return values.map((row) => {
    const obj: Record<string, unknown> = {};
    columns.forEach((col, i) => { obj[col] = row[i]; });
    return obj;
  });
}
