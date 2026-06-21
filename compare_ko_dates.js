const fs = require("fs");

// KO old
const oldRaw = fs.readFileSync("D:\\Codex\\TMG\\old_ko_index.html", "utf8");
const oldCards = [...oldRaw.matchAll(/<a href="\/ko\/blog\/([^"]+)"[\s\S]*?post-card__date[^>]*>(.*?)<\/span>/g)];
const oldDates = {};
for (const m of oldCards) { oldDates[m[1].replace(/\/$/, "")] = m[2].trim(); }

// KO current
const curRaw = fs.readFileSync(String.raw`C:\Users\fireh\WorkBuddy\20260326144402\tmg-website\ko\blog\index.html`, "utf8");
const curCards = [...curRaw.matchAll(/<a href="\/ko\/blog\/([^"]+)"[\s\S]*?post-card__date[^>]*>(.*?)<\/span>/g)];
const curDates = {};
for (const m of curCards) { curDates[m[1].replace(/\/$/, "")] = m[2].trim(); }

let same = 0, diff = 0;
const changes = [];
for (const [slug, oldDate] of Object.entries(oldDates)) {
  const curDate = curDates[slug];
  if (!curDate) { changes.push(slug + " | MISSING"); diff++; }
  else if (curDate !== oldDate) { changes.push(slug + " | " + oldDate + " -> " + curDate); diff++; }
  else { same++; }
}

console.log("=== KO ===");
console.log("Old: " + Object.keys(oldDates).length + " | Current: " + Object.keys(curDates).length);
console.log("Same: " + same + " | Different: " + diff);
if (changes.length > 0) { changes.forEach(c => console.log("  " + c)); }
