const fs = require("fs");
const c = fs.readFileSync(String.raw`C:\Users\fireh\WorkBuddy\20260326144402\tmg-website\ja\blog\cpm-is-rising-bad.html`, "utf8");
// Search for any occurrence of [table] anywhere
const allMatches = [...c.matchAll(/\[table\]/g)];
console.log("Total [table] matches: " + allMatches.length);
allMatches.forEach((m, i) => {
  const idx = m.index;
  console.log("Match " + i + " at " + idx + ": " + c.substring(Math.max(0, idx - 50), idx + 50));
});
// Also check the visible text
const article = c.match(/<article[\s\S]*?<\/article>/);
if (article) {
  const text = article[0].replace(/<[^>]+>/g, "");
  if (text.includes("[table]")) {
    console.log("\n[table] found in visible article text!");
  } else {
    console.log("\n[table] NOT in visible article text - likely cache issue");
  }
}
