const fs = require("fs");
const c = fs.readFileSync(String.raw`C:\Users\fireh\WorkBuddy\20260326144402\tmg-website\ja\blog\deepseek-v4-price-cut-geo.html`, "utf8");

const article = c.match(/<article[\s\S]*?<\/article>/)[0];

// Check ALL text nodes for English
const allText = [...article.matchAll(/>([^<]+)</g)];
console.log("=== ALL ENGLISH-HEAVY TEXT NODES ===");
for (const m of allText) {
  const text = m[1].trim();
  if (text.length < 5) continue;
  // Count English vs Japanese
  const engChars = (text.match(/[A-Za-z]/g) || []).length;
  const jaChars = (text.match(/[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]/g) || []).length;
  const total = text.length;
  if (engChars > 10 && jaChars === 0 && engChars / total > 0.6) {
    console.log("ENG: " + text.substring(0, 120));
  }
}

// Also check for hr-like elements (dividers)
const dividers = [...article.matchAll(/<(?:hr|div)[^>]*class="[^"]*divider[^"]*"[^>]*>/g)];
console.log("\nDivider elements: " + dividers.length);

// Check for any horizontal rule CSS
if (c.includes("border-bottom") && c.includes("hr")) {
  console.log("CSS border-bottom detected");
}

// Show all unique tags in article
const tags = [...article.matchAll(/<([a-z][a-z0-9]*)[^>]*>/g)].map(m => m[1]);
const unique = [...new Set(tags)];
console.log("\nTags in article: " + unique.join(", "));
