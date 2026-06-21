// Extract dates from the commit before batch publish (3dcfe1c)
const { execSync } = require("child_process");
const raw = execSync("git show 3dcfe1c:ja/blog/index.html", { cwd: String.raw`C:\Users\fireh\WorkBuddy\20260326144402\tmg-website`, encoding: "utf8", maxBuffer: 10 * 1024 * 1024 });

const cards = [...raw.matchAll(/<a href="\/ja\/blog\/([^"]+)"[\s\S]*?post-card__date[^>]*>(.*?)<\/span>/g)];
console.log("=== DATES AT 3dcfe1c (before batch publish) ===");
console.log("Total: " + cards.length);
const oldDates = {};
for (const m of cards) {
  const slug = m[1].replace(/\/$/, "");
  const date = m[2].trim();
  oldDates[slug] = date;
  console.log(slug + " | " + date);
}
