const fs = require("fs");

// Old dates from 3dcfe1c
const oldRaw = fs.readFileSync("D:\\Codex\\TMG\\old_index.html", "utf8");
const oldCards = [...oldRaw.matchAll(/<a href="\/ja\/blog\/([^"]+)"[\s\S]*?post-card__date[^>]*>(.*?)<\/span>/g)];
const oldDates = {};
for (const m of oldCards) { oldDates[m[1].replace(/\/$/, "")] = m[2].trim(); }

// Current dates
const curRaw = fs.readFileSync(String.raw`C:\Users\fireh\WorkBuddy\20260326144402\tmg-website\ja\blog\index.html`, "utf8");
const curCards = [...curRaw.matchAll(/<a href="\/ja\/blog\/([^"]+)"[\s\S]*?post-card__date[^>]*>(.*?)<\/span>/g)];
const curDates = {};
for (const m of curCards) { curDates[m[1].replace(/\/$/, "")] = m[2].trim(); }

// Compare
let diff = 0;
let fixed = 0;
const changes = [];
for (const [slug, oldDate] of Object.entries(oldDates)) {
  const curDate = curDates[slug];
  if (!curDate) {
    changes.push(slug + " | MISSING in current");
    diff++;
  } else if (curDate !== oldDate) {
    changes.push(slug + " | old: " + oldDate + " -> current: " + curDate);
    diff++;
  } else {
    fixed++;
  }
}

console.log("=== DATE COMPARISON ===");
console.log("Same: " + fixed);
console.log("Different: " + diff);
console.log("\nChanged dates:");
changes.forEach(c => console.log("  " + c));

// Also check if current has slugs not in old
for (const slug of Object.keys(curDates)) {
  if (!oldDates[slug]) {
    console.log("  NEW in current: " + slug + " | " + curDates[slug]);
  }
}
