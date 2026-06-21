const fs = require("fs");
const c = fs.readFileSync(String.raw`C:\Users\fireh\WorkBuddy\20260326144402\tmg-website\ja\blog\deepseek-v4-price-cut-geo.html`, "utf8");

// Show the metadata/header area at the top of article
const artStart = c.indexOf("<article");
console.log("=== ARTICLE START (first 2000) ===");
console.log(c.substring(artStart, artStart + 2000));

console.log("\n\n=== ENGLISH PARAGRAPHS ===");
const article = c.match(/<article[\s\S]*?<\/article>/)[0];
const paragraphs = [...article.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)];
for (const p of paragraphs) {
  const text = p[1].replace(/<[^>]+>/g, "").trim();
  if (text.length > 15 && /^[A-Za-z\s\.\,\-\—\;\:\'\"\(\)\[\]\d]+$/.test(text)) {
    console.log("ENG: " + text.substring(0, 150));
  }
}

// Show all HR contexts
console.log("\n=== HR CONTEXTS ===");
const hrs = [...c.matchAll(/<hr\s*\/?>/g)];
for (let i = 0; i < hrs.length; i++) {
  const idx = hrs[i].index;
  const before = c.substring(Math.max(0, idx - 120), idx);
  const after = c.substring(idx, Math.min(c.length, idx + 120));
  console.log("--- HR " + i + " ---");
  console.log("BEFORE: ..." + before.replace(/\s+/g, " ").slice(-80));
  console.log("AFTER: " + after.substring(0, 80).replace(/\s+/g, " "));
  console.log();
}
