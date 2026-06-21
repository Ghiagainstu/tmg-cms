const fs = require("fs");
const c = fs.readFileSync(String.raw`D:\Codex\TMG\smart-bidding_fixed.html`, "utf8");
var markers = [
  { name: "CALLOUT", m: '<div class="callout callout--accent">' },
  { name: "FEATURE-GRID", m: '<div class="feature-grid">' },
  { name: "ARTICLE-TABLE", m: '<table class="article-table">' },
  { name: "TAKEAWAY-BANNER", m: '<div class="takeaway-banner">' }
];
for (var {name, m} of markers) {
  var idx = c.indexOf(m);
  if (idx > 0) {
    console.log("=== " + name + " ===");
    console.log(c.substring(Math.max(0, idx - 50), Math.min(c.length, idx + 300)));
    console.log("...\n");
  }
}
// Check article end is clean
var artEnd = c.indexOf("</article>");
console.log("=== ARTICLE END (last 300) ===");
console.log(c.substring(Math.max(0, artEnd - 300), artEnd));
