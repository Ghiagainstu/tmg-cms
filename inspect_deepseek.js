const fs = require("fs");
const srcPath = String.raw`C:\Users\fireh\WorkBuddy\20260326144402\tmg-website\ja\blog\deepseek-v4-price-cut-geo.html`;
let c = fs.readFileSync(srcPath, "utf8");

// Show the exact bytes at article start
const artStart = c.indexOf("<article");
const snippet = c.substring(artStart, artStart + 600);
for (let i = 0; i < Math.min(200, snippet.length); i++) {
  const ch = snippet.charCodeAt(i);
  if (ch > 127 || ch < 32) {
    if (ch !== 10 && ch !== 13) {
      console.log("Pos " + i + ": U+" + ch.toString(16).toUpperCase() + " (" + snippet[i] + ")");
    }
  }
}
console.log("\nFirst 200 chars of article:");
console.log(snippet.substring(0, 200));
