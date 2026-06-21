const fs = require("fs");

function compareDates(oldPath, curPath, lang) {
  const oldRaw = fs.readFileSync(oldPath, "utf8");
  const curRaw = fs.readFileSync(curPath, "utf8");
  
  const re = /<a href="\/(?:en\/)?blog\/([^"]+)"[\s\S]*?post-card__date[^>]*>(.*?)<\/span>/g;
  
  const oldDates = {};
  for (const m of [...oldRaw.matchAll(re)]) { oldDates[m[1].replace(/\/$/, "")] = m[2].trim(); }
  
  const curDates = {};
  const re2 = /<a href="\/(?:en\/|ko\/)?blog\/([^"]+)"[\s\S]*?post-card__date[^>]*>(.*?)<\/span>/g;
  for (const m of [...curRaw.matchAll(re2)]) { curDates[m[1].replace(/\/$/, "")] = m[2].trim(); }
  
  let same = 0, diff = 0;
  const changes = [];
  for (const [slug, oldDate] of Object.entries(oldDates)) {
    const curDate = curDates[slug];
    if (!curDate) { changes.push(slug + " | MISSING"); diff++; }
    else if (curDate !== oldDate) { changes.push(slug + " | " + oldDate + " -> " + curDate); diff++; }
    else { same++; }
  }
  
  console.log("=== " + lang + " ===");
  console.log("Same: " + same + " | Different: " + diff);
  if (changes.length > 0) { changes.forEach(c => console.log("  " + c)); }
  console.log();
}

compareDates("D:\\Codex\\TMG\\old_en_index.html", String.raw`C:\Users\fireh\WorkBuddy\20260326144402\tmg-website\blog\index.html`, "EN");
compareDates("D:\\Codex\\TMG\\old_ko_index.html", String.raw`C:\Users\fireh\WorkBuddy\20260326144402\tmg-website\ko\blog\index.html`, "KO");
