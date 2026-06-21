const fs = require("fs");
const c = fs.readFileSync("D:\\Codex\\TMG\\ad-billing-models-explained_fixed.html", "utf8");

// Preview each component in context
const components = [
  { name: "CALLOUT", marker: '<div class="callout callout--accent">' },
  { name: "FEATURE-GRID", marker: '<div class="feature-grid">' },
  { name: "ARTICLE-TABLE", marker: '<table class="article-table">' },
  { name: "TAKEAWAY-BANNER", marker: '<div class="takeaway-banner">' }
];

for (const comp of components) {
  const idx = c.indexOf(comp.marker);
  if (idx > 0) {
    const start = Math.max(0, idx - 80);
    const end = Math.min(c.length, idx + 600);
    console.log("=== " + comp.name + " (at " + idx + ") ===");
    console.log(c.substring(start, end));
    console.log("...\n");
  }
}
