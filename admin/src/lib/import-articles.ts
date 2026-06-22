// Batch import articles from topics_data.json into CMS database
import { getDb, saveDb } from "./db";
import fs from "fs";
import path from "path";

interface TopicData {
  slug: string;
  title: string;
  tmg: string;
  category: string;
  platform: string;
  data: string[];
  sourceUrl: string;
}

export async function importArticles(): Promise<{ imported: number; skipped: number; total: number }> {
  const topicsPath = path.join(process.cwd(), "..", "_archive", "topics_data.json");
  if (!fs.existsSync(topicsPath)) {
    throw new Error("topics_data.json not found at " + topicsPath);
  }

  const raw = fs.readFileSync(topicsPath, "utf-8");
  const topics: TopicData[] = JSON.parse(raw);

  const db = await getDb();
  let imported = 0;
  let skipped = 0;

  for (const topic of topics) {
    // Check if already exists
    const existing = db.exec("SELECT id FROM articles WHERE slug = ? AND lang = ?", [topic.slug, "en"]);
    if (existing.length && existing[0].values.length) {
      skipped++;
      continue;
    }

    // Build content HTML
    const bullets = topic.data.map((d) => `<li>${d}</li>`).join("\n");
    const content = `<p>${topic.tmg}</p>\n<h2>Key Data Points</h2>\n<ul>\n${bullets}\n</ul>`;

    // Build excerpt
    const excerpt = topic.tmg.length > 160 ? topic.tmg.slice(0, 157) + "..." : topic.tmg;

    db.run(
      `INSERT INTO articles (slug, lang, title, excerpt, content, category, tags, author, read_time, status, publish_date, meta_description)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        topic.slug,
        "en",
        topic.title,
        excerpt,
        content,
        topic.category,
        JSON.stringify([topic.platform]),
        "TMG Team",
        "8 min read",
        "published",
        "June 18, 2026",
        excerpt,
      ]
    );
    imported++;
  }

  saveDb(db);
  return { imported, skipped, total: topics.length };
}
