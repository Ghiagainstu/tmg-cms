const fs = require("fs");

function checkOrder(indexPath, lang) {
  const c = fs.readFileSync(indexPath, "utf8");
  const re = /<a href="\/(?:en\/|ja\/|ko\/)?blog\/([^"]+)"[\s\S]*?post-card__date[^>]*>(.*?)<\/span>/g;
  const cards = [];
  for (const m of [...c.matchAll(re)]) {
    cards.push({ slug: m[1].replace(/\/$/, ""), date: m[2].trim() });
  }
  console.log("=== " + lang + " (" + cards.length + " articles) ===");
  console.log("First 5:");
  cards.slice(0, 5).forEach((c, i) => console.log("  " + i + ": " + c.date + " | " + c.slug));
  console.log("Last 5:");
  cards.slice(-5).forEach((c, i) => console.log("  " + (cards.length - 5 + i) + ": " + c.date + " | " + c.slug));
  
  // Check if sorted newest-first
  let outOfOrder = 0;
  for (let i = 1; i < cards.length; i++) {
    const prev = parseDate(cards[i-1].date);
    const cur = parseDate(cards[i].date);
    if (prev && cur && prev < cur) { outOfOrder++; }
  }
  console.log("Out of order pairs: " + outOfOrder + "\n");
}

function parseDate(d) {
  // Handle "2026年6月18日" and "May 4, 2026"
  const ja = d.match(/(\d{4})\u5e74(\d{1,2})\u6708(\d{1,2})\u65e5/);
  if (ja) return new Date(parseInt(ja[1]), parseInt(ja[2])-1, parseInt(ja[3]));
  const en = d.match(/(\w+ \d+, \d{4})/);
  if (en) return new Date(en[1]);
  return null;
}

checkOrder(String.raw`C:\Users\fireh\WorkBuddy\20260326144402\tmg-website\blog\index.html`, "EN");
checkOrder(String.raw`C:\Users\fireh\WorkBuddy\20260326144402\tmg-website\ja\blog\index.html`, "JA");
checkOrder(String.raw`C:\Users\fireh\WorkBuddy\20260326144402\tmg-website\ko\blog\index.html`, "KO");
