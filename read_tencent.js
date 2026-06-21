const fs = require("fs");
const c = fs.readFileSync(String.raw`C:\Users\fireh\WorkBuddy\20260326144402\tmg-website\ja\blog\tencent-ads-home-furnishing-ja.html`, "utf8");

const headings = [...c.matchAll(/<h([234])[^>]*>(.*?)<\/h[234]>/g)];
console.log("=== HEADINGS ===");
headings.forEach(h => console.log("H" + h[1] + ": " + h[2].replace(/<[^>]+>/g, "")));

const art = c.match(/<article[\s\S]*?<\/article>/);
if (art) { const text = art[0].replace(/<[^>]+>/g, "").trim(); console.log("\nChars: " + text.length); }

console.log("\n=== COMPONENTS ===");
console.log("callout callout--accent: " + /<div class="callout callout--accent">/.test(c));
console.log("feature-grid: " + /<div class="feature-grid">/.test(c));
console.log("article-table: " + /class="article-table">/.test(c));
console.log("takeaway-banner: " + /<div class="takeaway-banner">/.test(c));

var engWords = ["Key Insight", "Market Signal", "Key Takeaway", "Key Data", "significantly", "massive", "uniquely", "Leveraging", "Published on", "Live URL", "Source:"];
for (var w of engWords) { if (c.includes(w)) console.log("ENGLISH: " + w); }

if (c.includes("[table]")) console.log("[table] PLACEHOLDER");
var hrCount = (c.match(/<hr/g) || []).length;
console.log("hr: " + hrCount);

// Check footer
var footerLabels = ["About TMG", "Quick Links", "Legal"];
for (var l of footerLabels) { if (c.includes(l)) console.log("ENG FOOTER: " + l); }

var artEnd = c.indexOf("</article>");
console.log("\n=== ARTICLE END ===");
console.log(c.substring(Math.max(0, artEnd - 800), artEnd));
