const fs = require("fs");
const c = fs.readFileSync("D:\\Codex\\TMG\\baidu-demographics_fixed.html", "utf8");
const markers = [
  { name: "CALLOUT", m: '<div class="callout callout--accent">' },
  { name: "FEATURE-GRID", m: '<div class="feature-grid">' },
  { name: "ARTICLE-TABLE", m: '<table class="article-table">' },
  { name: "TAKEAWAY-BANNER", m: '<div class="takeaway-banner">' }
];
for (const {name, m} of markers) {
  const idx = c.indexOf(m);
  if (idx > 0) {
    const start = Math.max(0, idx - 80);
    const end = Math.min(c.length, idx + 500);
    console.log("=== " + name + " ===");
    console.log(c.substring(start, end));
    console.log("...\n");
  }
}
