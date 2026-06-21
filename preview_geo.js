const fs = require("fs");
const c = fs.readFileSync(String.raw`D:\Codex\TMG\geo-channel_fixed.html`, "utf8");
const markers = [
  { name: "CALLOUT", m: '<div class="callout callout--accent">' },
  { name: "FEATURE-GRID", m: '<div class="feature-grid">' },
  { name: "TAKEAWAY-BANNER", m: '<div class="takeaway-banner">' }
];
for (const {name, m} of markers) {
  const idx = c.indexOf(m);
  if (idx > 0) {
    console.log("=== " + name + " ===");
    console.log(c.substring(Math.max(0, idx - 60), Math.min(c.length, idx + 350)));
    console.log("...\n");
  }
}
// Check article end is clean
const artEnd = c.indexOf("</article>");
console.log("=== ARTICLE END ===");
console.log(c.substring(Math.max(0, artEnd - 300), artEnd));
