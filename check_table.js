const fs = require("fs");
const c = fs.readFileSync(String.raw`C:\Users\fireh\WorkBuddy\20260326144402\tmg-website\ja\blog\cpm-is-rising-bad.html`, "utf8");
const idx = c.indexOf("[table]");
if (idx >= 0) {
  console.log("[table] FOUND at position " + idx);
  console.log("Context: " + c.substring(Math.max(0, idx - 100), idx + 100));
} else {
  console.log("[table] NOT found in deployed file");
}
// Also check if article-table exists
console.log("\narticle-table present: " + /class="article-table">/.test(c));
