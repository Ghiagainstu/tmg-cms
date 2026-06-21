const fs = require("fs");
const c = fs.readFileSync(String.raw`C:\Users\fireh\WorkBuddy\20260326144402\tmg-website\ja\blog\index.html`, "utf8");

// Find the first post-card link
const idx = c.indexOf('class="post-card');
if (idx > 0) {
  // Go back to find <a
  const aStart = c.lastIndexOf("<a", idx);
  const aEnd = c.indexOf("</a>", idx) + 4;
  console.log("=== FIRST CARD ===");
  console.log(c.substring(aStart, Math.min(aEnd, aStart + 600)));
}
