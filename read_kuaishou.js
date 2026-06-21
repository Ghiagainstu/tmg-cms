const fs = require("fs");
const c = fs.readFileSync(String.raw`C:\Users\fireh\WorkBuddy\20260326144402\tmg-website\ja\blog\kuaishou-demographics-who-are-these-400m-users.html`, "utf8");

// Headings
const headings = [...c.matchAll(/<h([234])[^>]*>(.*?)<\/h[234]>/g)];
console.log("=== HEADINGS ===");
headings.forEach(h => console.log("H" + h[1] + ": " + h[2].replace(/<[^>]+>/g, "")));

// Stats
const art = c.match(/<article[\s\S]*?<\/article>/);
if (art) { const text = art[0].replace(/<[^>]+>/g, "").trim(); console.log("\nChars: " + text.length); }

// Components
console.log("\n=== COMPONENTS ===");
console.log("callout callout--accent: " + /<div class="callout callout--accent">/.test(c));
console.log("feature-grid: " + /<div class="feature-grid">/.test(c));
console.log("article-table: " + /class="article-table">/.test(c));
console.log("takeaway-banner: " + /<div class="takeaway-banner">/.test(c));

// English check
var engWords = ["Key Insight", "Market Signal", "Key Takeaway", "Key Data", "significantly", "massive", "uniquely", "Leveraging", "Published on", "Live URL", "Source:"];
for (var w of engWords) { if (c.includes(w)) console.log("ENGLISH: " + w); }

// [table] and <hr>
if (c.includes("[table]")) console.log("[table] PLACEHOLDER");
console.log("<hr>: " + (c.match(/<hr/g) || []).length);

// English H1
var h1s = [...c.matchAll(/<h1[^>]*>(.*?)<\/h1>/g)];
h1s.forEach(h => { var t = h[1].replace(/<[^>]+>/g, ""); if (/^[A-Z][A-Za-z\s\d\-]+$/.test(t) && t.length > 10) console.log("ENG H1: " + t); });

// Article end
var artEnd = c.indexOf("</article>");
console.log("\n=== ARTICLE END ===");
console.log(c.substring(Math.max(0, artEnd - 800), artEnd));
