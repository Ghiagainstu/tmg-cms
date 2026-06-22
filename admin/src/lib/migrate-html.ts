// Migrate existing HTML blog articles into the CMS database
// Reads article HTML files and extracts: title, meta, content, category, date
import { getDb, saveDb } from "./db";
import fs from "fs";
import path from "path";

interface ExtractedArticle {
  slug: string;
  lang: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  readTime: string;
  publishDate: string;
  metaDesc: string;
  canonical: string;
  ogImage: string;
}

function extractFromHtml(html: string, slug: string, lang: string): ExtractedArticle | null {
  // Title
  const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
  let title = titleMatch ? titleMatch[1].replace(/\s*\|.*$/, "").trim() : slug;

  // Meta description
  const descMatch = html.match(/<meta\s+name="description"\s+content="([^"]+)"/i);
  const metaDesc = descMatch ? descMatch[1] : "";

  // OG image
  const ogMatch = html.match(/<meta\s+property="og:image"\s+content="([^"]+)"/i);
  const ogImage = ogMatch ? ogMatch[1] : "";

  // Canonical
  const canonMatch = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i);
  const canonical = canonMatch ? canonMatch[1] : "";

  // Category
  const catMatch = html.match(/article-category[^>]*>([^<]+)</i);
  const category = catMatch ? catMatch[1].trim() : "";

  // Date
  const dateMatch = html.match(/article-date[^>]*>([^<]+)</i);
  const publishDate = dateMatch ? dateMatch[1].trim() : "";

  // Read time
  const timeMatch = html.match(/article-read-time[^>]*>([^<]+)</i);
  const readTime = timeMatch ? timeMatch[1].trim() : "8 min read";

  // Author
  const authorMatch = html.match(/article-hero__author-name[^>]*>([^<]+)</i);
  const author = authorMatch ? authorMatch[1].trim() : "TMG Team";

  // Extract main content (article-content div)
  const contentMatch = html.match(/<div\s+class="article-content[^"]*"[\s\S]*?>([\s\S]*?)<\/div>\s*(?=<div\s+class="article-sidebar|<footer|<div\s+class="footer)/i);
  let content = contentMatch ? contentMatch[1].trim() : "";

  // If no article-content found, try article-body
  if (!content) {
    const bodyMatch = html.match(/<div\s+class="article-body[\s\S]*?>([\s\S]*?)<\/div>\s*(?=<footer|<div\s+class="footer)/i);
    content = bodyMatch ? bodyMatch[1].trim() : "";
  }

  // Clean up: remove script tags, style tags
  content = content.replace(/<script[\s\S]*?<\/script>/gi, "");
  content = content.replace(/<style[\s\S]*?<\/style>/gi, "");

  if (!title || !content) return null;

  // Build excerpt from meta or first paragraph
  const excerpt = metaDesc || (content.match(/<p>([^<]{20,200})/)?.[1] || "").trim();

  return { slug, lang, title, excerpt, content, category, author, readTime, publishDate, metaDesc, canonical, ogImage };
}

export async function migrateHtml(): Promise<{ migrated: number; skipped: number; errors: string[] }> {
  // Look for HTML article files in the repo root
  const rootDir = path.join(process.cwd(), "..");
  const files = fs.readdirSync(rootDir).filter((f) => f.endsWith("_fixed.html") || f.endsWith("_fixed2.html") || f.endsWith("_fixed3.html"));

  // Also check sorted index files for slug lists
  const indexFiles = ["en_index_sorted.html", "ja_index_sorted.html", "ko_index_sorted.html"];
  const langMap: Record<string, string> = { "en_index_sorted.html": "en", "ja_index_sorted.html": "ja", "ko_index_sorted.html": "ko" };

  // Extract slugs from index files to know which articles exist
  const knownArticles: { slug: string; lang: string }[] = [];
  for (const idxFile of indexFiles) {
    const idxPath = path.join(rootDir, idxFile);
    if (!fs.existsSync(idxPath)) continue;
    const idxHtml = fs.readFileSync(idxPath, "utf-8");
    const lang = langMap[idxFile];
    const slugRe = /href="\/(?:en\/|ja\/|ko\/)?blog\/([^"]+)\/"/g;
    let m;
    while ((m = slugRe.exec(idxHtml)) !== null) {
      knownArticles.push({ slug: m[1].replace(/\/$/, ""), lang });
    }
  }

  const db = await getDb();
  let migrated = 0;
  let skipped = 0;
  const errors: string[] = [];

  // Process available HTML files
  for (const file of files) {
    const filePath = path.join(rootDir, file);
    const html = fs.readFileSync(filePath, "utf-8");

    // Determine slug and lang from filename
    let slug = file.replace(/_fixed\d*\.html$/, "").replace(/\.html$/, "");
    let lang = "en";

    // Check canonical for actual lang
    const canonMatch = html.match(/canonical[^"]*href="[^"]*\/(ja|ko)\/blog\//);
    if (canonMatch) lang = canonMatch[1];

    const extracted = extractFromHtml(html, slug, lang);
    if (!extracted) {
      errors.push("Could not extract: " + file);
      continue;
    }

    // Check if already exists
    const existing = db.exec("SELECT id FROM articles WHERE slug = ? AND lang = ?", [extracted.slug, extracted.lang]);
    if (existing.length && existing[0].values.length) {
      skipped++;
      continue;
    }

    db.run(
      `INSERT INTO articles (slug, lang, title, excerpt, content, category, tags, author, read_time, status, publish_date, meta_description, og_image, canonical)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        extracted.slug, extracted.lang, extracted.title, extracted.excerpt,
        extracted.content, extracted.category, JSON.stringify([]),
        extracted.author, extracted.readTime, "published",
        extracted.publishDate, extracted.metaDesc, extracted.ogImage, extracted.canonical,
      ]
    );
    migrated++;
  }

  // Also migrate any known articles from index that don't have HTML files yet
  // (they'll get placeholder content from topics_data if available)
  for (const { slug, lang } of knownArticles) {
    const existing = db.exec("SELECT id FROM articles WHERE slug = ? AND lang = ?", [slug, lang]);
    if (existing.length && existing[0].values.length) continue;

    // Check if topics_data has this article
    const topicsPath = path.join(rootDir, "_archive", "topics_data.json");
    if (fs.existsSync(topicsPath)) {
      const topics = JSON.parse(fs.readFileSync(topicsPath, "utf-8"));
      const topic = topics.find((t: { slug: string }) => t.slug === slug);
      if (topic) {
        const bullets = topic.data.map((d: string) => `<li>${d}</li>`).join("\n");
        const content = `<p>${topic.tmg}</p>\n<h2>Key Data Points</h2>\n<ul>\n${bullets}\n</ul>`;
        const excerpt = topic.tmg.length > 160 ? topic.tmg.slice(0, 157) + "..." : topic.tmg;
        db.run(
          `INSERT INTO articles (slug, lang, title, excerpt, content, category, tags, author, read_time, status, publish_date, meta_description)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
          [slug, lang, topic.title, excerpt, content, topic.category, JSON.stringify([topic.platform]), "TMG Team", "8 min read", "published", "June 18, 2026", excerpt]
        );
        migrated++;
      }
    }
  }

  saveDb(db);
  return { migrated, skipped, errors };
}
