const fs = require("fs");
const c = fs.readFileSync(String.raw`C:\Users\fireh\WorkBuddy\20260326144402\tmg-website\ja\blog\index.html`, "utf8");

// Find all date entries
const dates = [...c.matchAll(/post-card__date[^>]*>(.*?)<\/span>/g)];
console.log("Total dates: " + dates.length);

// Count by date value
const dateMap = {};
for (const m of dates) {
  const d = m[1].trim();
  if (!dateMap[d]) dateMap[d] = 0;
  dateMap[d]++;
}
const sorted = Object.entries(dateMap).sort((a,b) => b[1] - a[1]);
console.log("\nDate distribution:");
sorted.forEach(([d, count]) => console.log("  " + d + ": " + count));

// Show some examples
console.log("\nFirst 10 date entries:");
dates.slice(0, 10).forEach((m, i) => console.log("  " + i + ": " + m[1].trim()));
