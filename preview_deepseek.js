const fs = require("fs");
const c = fs.readFileSync(String.raw`D:\Codex\TMG\deepseek-v4_fixed.html`, "utf8");
const markers = [
  { name: "CALLOUT", m: '<div class="callout callout--accent">' },
  { name: "FEATURE-GRID", m: '<div class="feature-grid">' },
  { name: "TAKEAWAY-BANNER", m: '<div class="takeaway-banner">' }
];
for (const {name, m} of markers) {
  const idx = c.indexOf(m);
  if (idx > 0) {
    const start = Math.max(0, idx - 60);
    const end = Math.min(c.length, idx + 350);
    console.log("=== " + name + " ===");
    console.log(c.substring(start, end));
    console.log("...\n");
  }
}
// Verify no source metadata
console.log("Source metadata: " + (c.includes("Source: https") ? "STILL THERE" : "removed"));
console.log("English metadata: " + (c.includes("English Blog Post") ? "STILL THERE" : "removed"));
