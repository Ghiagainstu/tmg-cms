const fs = require("fs");
const c = fs.readFileSync(String.raw`D:\Codex\TMG\cpm-ocpm-ecpm_fixed.html`, "utf8");
const markers = [
  { name: "CALLOUT", m: '<div class="callout callout--accent">' },
  { name: "FEATURE-GRID", m: '<div class="feature-grid">' },
  { name: "ARTICLE-TABLE", m: '<table class="article-table">' },
  { name: "TAKEAWAY-BANNER", m: '<div class="takeaway-banner">' }
];
for (const {name, m} of markers) {
  const idx = c.indexOf(m);
  if (idx > 0) {
    const start = Math.max(0, idx - 60);
    const end = Math.min(c.length, idx + 400);
    console.log("=== " + name + " ===");
    console.log(c.substring(start, end));
    console.log("...\n");
  }
}
