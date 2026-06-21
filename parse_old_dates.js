const fs = require("fs");
const raw = fs.readFileSync("D:\\Codex\\TMG\\old_index.html", "utf8");

const cards = [...raw.matchAll(/<a href="\/ja\/blog\/([^"]+)"[\s\S]*?post-card__date[^>]*>(.*?)<\/span>/g)];
console.log("=== OLD DATES (commit 3dcfe1c - before batch) ===");
console.log("Total: " + cards.length);
const oldDates = {};
for (const m of cards) {
  const slug = m[1].replace(/\/$/, "");
  const date = m[2].trim();
  oldDates[slug] = date;
}
console.log(JSON.stringify(oldDates, null, 2));
