const fs = require("fs");
const c = fs.readFileSync("C:\\Users\\fireh\\WorkBuddy\\20260326144402\\tmg-website\\ja\\blog\\baidu-demographics-who-are-these-735m-users.html", "utf8");

// Headings
const headings = [...c.matchAll(/<h([234])[^>]*>(.*?)<\/h[234]>/g)];
console.log("=== HEADINGS ===");
headings.forEach(h => console.log("H" + h[1] + ": " + h[2].replace(/<[^>]+>/g, "")));

// Stats
const art = c.match(/<article[\s\S]*?<\/article>/);
if (art) {
  const text = art[0].replace(/<[^>]+>/g, "").trim();
  console.log("\nChars: " + text.length);
}

// Components
console.log("\n=== COMPONENTS ===");
console.log("callout callout--accent: " + /<div class="callout callout--accent">/.test(c));
console.log("feature-grid: " + /<div class="feature-grid">/.test(c));
console.log("article-table: " + /class="article-table">/.test(c));
console.log("takeaway-banner: " + /<div class="takeaway-banner">/.test(c));

// Existing callouts
const callouts = [...c.matchAll(/<div class="callout[^"]*">([\s\S]{0,200}?)<\/div>/g)];
console.log("\nExisting callouts: " + callouts.length);

// CTA area
const ctaH2 = c.match(/<h2[^>]*>([\s\S]{0,200}?)<\/h2>\s*<p>[\s\S]{0,100}?<a href="\/ja\/contact/);
if (ctaH2) console.log("\nCTA H2 found");

// Last 2000 chars of article
const artEnd = c.indexOf("</article>");
console.log("\n=== ARTICLE END ===");
console.log(c.substring(Math.max(0, artEnd - 1500), artEnd));
