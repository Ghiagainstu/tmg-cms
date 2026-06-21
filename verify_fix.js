const fs = require("fs");
const c = fs.readFileSync("D:\\Codex\\TMG\\ad-billing-models-explained_fixed.html", "utf8");
console.log("callout callout--accent: " + /<div class="callout callout--accent">/.test(c));
console.log("feature-grid: " + /<div class="feature-grid">/.test(c));
console.log("article-table: " + /class="article-table">/.test(c));
console.log("takeaway-banner: " + /<div class="takeaway-banner">/.test(c));

// Show where each component is
const calloutIdx = c.indexOf('<div class="callout callout--accent">');
const gridIdx = c.indexOf('<div class="feature-grid">');
const tableIdx = c.indexOf('class="article-table">');
const bannerIdx = c.indexOf('<div class="takeaway-banner">');
console.log("\nPositions:");
console.log("callout: " + calloutIdx);
console.log("feature-grid: " + gridIdx);
console.log("article-table: " + tableIdx);
console.log("takeaway-banner: " + bannerIdx);

// Show the table area
if (tableIdx > 0) {
  console.log("\n=== TABLE AREA ===");
  console.log(c.substring(tableIdx - 50, Math.min(tableIdx + 400, c.length)));
}
