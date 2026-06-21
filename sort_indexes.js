const fs = require("fs");

function sortIndex(indexPath, lang, urlPrefix) {
  let c = fs.readFileSync(indexPath, "utf8");
  
  // Find the card section - each card is an <a> block with date
  // Split by card boundaries
  const cardRe = /(<a href="\/(?:en\/|ja\/|ko\/)?blog\/[^"]+" class="post-card"[\s\S]*?<\/a>\s*)/g;
  const cards = [];
  let match;
  const fullRe = /<a href="\/(?:en\/|ja\/|ko\/)?blog\/[^"]+" class="post-card"[\s\S]*?<\/a>/g;
  while ((match = fullRe.exec(c)) !== null) {
    const cardHtml = match[0];
    const dateMatch = cardHtml.match(/post-card__date[^>]*>(.*?)<\/span>/);
    const slugMatch = cardHtml.match(/href="\/(?:en\/|ja\/|ko\/)?blog\/([^"]+)"/);
    if (dateMatch && slugMatch) {
      const dateStr = dateMatch[1].trim();
      const slug = slugMatch[1].replace(/\/$/, "");
      const parsed = parseDate(dateStr);
      cards.push({ html: cardHtml, date: dateStr, slug, parsed, index: match.index });
    }
  }
  
  console.log("=== " + lang + " ===");
  console.log("Cards found: " + cards.length);
  
  // Sort by date descending (newest first), then by slug for ties
  cards.sort((a, b) => {
    if (!a.parsed || !b.parsed) return 0;
    const diff = b.parsed.getTime() - a.parsed.getTime();
    if (diff !== 0) return diff;
    return a.slug.localeCompare(b.slug);
  });
  
  // Show first/last 3
  console.log("After sort - first 3:");
  cards.slice(0, 3).forEach((c, i) => console.log("  " + c.date + " | " + c.slug));
  console.log("After sort - last 3:");
  cards.slice(-3).forEach((c, i) => console.log("  " + c.date + " | " + c.slug));
  
  // Rebuild the HTML: replace card section
  // Find the first card start and last card end in original
  const firstCardStart = c.indexOf('<a href="/' + urlPrefix + 'blog/');
  // Find the container div that wraps all cards
  // The cards are inside a <div class="post-grid"> or similar
  
  // Strategy: find all card positions, replace them in sorted order
  const allCardMatches = [...c.matchAll(/<a href="\/(?:en\/|ja\/|ko\/)?blog\/[^"]+" class="post-card"[\s\S]*?<\/a>/g)];
  
  if (allCardMatches.length !== cards.length) {
    console.log("ERROR: match count mismatch");
    return;
  }
  
  // Replace each card position with sorted card
  let result = c;
  // Work backwards to preserve indices
  for (let i = allCardMatches.length - 1; i >= 0; i--) {
    const original = allCardMatches[i];
    const sorted = cards[i];
    result = result.substring(0, original.index) + sorted.html + result.substring(original.index + original[0].length);
  }
  
  // Verify
  const verifyRe = /<a href="\/(?:en\/|ja\/|ko\/)?blog\/([^"]+)"[\s\S]*?post-card__date[^>]*>(.*?)<\/span>/g;
  const verifyCards = [];
  let vm;
  while ((vm = verifyRe.exec(result)) !== null) {
    verifyCards.push({ slug: vm[1].replace(/\/$/, ""), date: vm[2].trim() });
  }
  
  let outOfOrder = 0;
  for (let i = 1; i < verifyCards.length; i++) {
    const prev = parseDate(verifyCards[i-1].date);
    const cur = parseDate(verifyCards[i].date);
    if (prev && cur && prev < cur) { outOfOrder++; }
  }
  console.log("Out of order after fix: " + outOfOrder);
  
  fs.writeFileSync(indexPath, result, "utf8");
  console.log("Saved!\n");
}

function parseDate(d) {
  const ja = d.match(/(\d{4})\u5e74(\d{1,2})\u6708(\d{1,2})\u65e5/);
  if (ja) return new Date(parseInt(ja[1]), parseInt(ja[2])-1, parseInt(ja[3]));
  const ko = d.match(/(\d{4})\ub144\s*(\d{1,2})\uc6d4\s*(\d{1,2})\uc77c/);
  if (ko) return new Date(parseInt(ko[1]), parseInt(ko[2])-1, parseInt(ko[3]));
  const en = d.match(/(\w+ \d+, \d{4})/);
  if (en) return new Date(en[1]);
  return null;
}

sortIndex(String.raw`C:\Users\fireh\WorkBuddy\20260326144402\tmg-website\blog\index.html`, "EN", "");
sortIndex(String.raw`C:\Users\fireh\WorkBuddy\20260326144402\tmg-website\ja\blog\index.html`, "JA", "ja/");
sortIndex(String.raw`C:\Users\fireh\WorkBuddy\20260326144402\tmg-website\ko\blog\index.html`, "KO", "ko/");
