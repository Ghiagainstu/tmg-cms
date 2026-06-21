const fs = require("fs");
const c = fs.readFileSync(String.raw`C:\Users\fireh\WorkBuddy\20260326144402\tmg-website\ja\blog\index.html`, "utf8");

// Extract slug + date pairs
const cards = [...c.matchAll(/<a href="\/ja\/blog\/([^"]+)"[\s\S]*?post-card__date[^>]*>(.*?)<\/span>/g)];
console.log("Total cards with dates: " + cards.length);

// Show all
const pairs = cards.map(m => ({ slug: m[1].replace(/\/$/, ""), date: m[2].trim() }));
for (const p of pairs) {
  console.log(p.slug + " | " + p.date);
}
