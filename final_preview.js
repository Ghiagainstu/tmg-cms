const fs = require("fs");
const c = fs.readFileSync("D:\\Codex\\TMG\\ad-billing-models-explained_fixed.html", "utf8");

// Show each component in context
const markers = [
  { name: "CALLOUT (\u306a\u305c\u91cd\u8981\u304b)", m: '<div class="callout callout--accent">' },
  { name: "FEATURE-GRID", m: '<div class="feature-grid">' },
  { name: "ARTICLE-TABLE", m: '<table class="article-table">' },
  { name: "TAKEAWAY-BANNER", m: '<div class="takeaway-banner">' }
];

for (const {name, m} of markers) {
  const idx = c.indexOf(m);
  if (idx > 0) {
    const start = Math.max(0, idx - 100);
    const end = Math.min(c.length, idx + 500);
    const snippet = c.substring(start, end);
    console.log("=== " + name + " ===");
    // Show just the component and surrounding context
    const compStart = snippet.indexOf(m);
    console.log(snippet.substring(Math.max(0, compStart - 30)));
    console.log("...\n");
  }
}

// Check all 4 components
console.log("=== VERIFICATION ===");
console.log("callout callout--accent: " + (/<div class="callout callout--accent">/.test(c) ? "PASS" : "FAIL"));
console.log("feature-grid: " + (/<div class="feature-grid">/.test(c) ? "PASS" : "FAIL"));
console.log("article-table: " + (/class="article-table">/.test(c) ? "PASS" : "FAIL"));
console.log("takeaway-banner: " + (/<div class="takeaway-banner">/.test(c) ? "PASS" : "FAIL"));

// Check no English remnants
console.log("\n=== ENGLISH CHECK ===");
console.log("Key Insight: " + (c.includes("Key Insight") ? "FOUND" : "clean"));
console.log("Key Takeaway: " + (c.includes("Key Takeaway") ? "FOUND" : "clean"));
console.log("Key Data: " + (c.includes("Key Data") ? "FOUND" : "clean"));
console.log("significantly: " + (c.includes("significantly") ? "FOUND" : "clean"));
console.log("massive: " + (c.includes("massive") ? "FOUND" : "clean"));
