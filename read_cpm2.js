const fs = require("fs");
const c = fs.readFileSync(String.raw`C:\Users\fireh\WorkBuddy\20260326144402\tmg-website\ja\blog\cpm-ocpm-ecpm-explained.html`, "utf8");

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

// Existing callouts
const calloutTypes = [...c.matchAll(/<div class="callout[^"]*">/g)];
calloutTypes.forEach(m => console.log("Callout type: " + m[0]));

// English check
const engWords = ["Key Insight", "Market Signal", "Key Takeaway", "Key Data", "significantly", "massive", "uniquely", "Leveraging", "decent", "killing"];
for (const w of engWords) { if (c.includes(w)) console.log("ENGLISH: " + w); }

// Article end
const artEnd = c.indexOf("</article>");
console.log("\n=== ARTICLE END ===");
console.log(c.substring(Math.max(0, artEnd - 1500), artEnd));
