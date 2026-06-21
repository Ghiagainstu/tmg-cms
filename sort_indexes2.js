const fs = require("fs");

function sortIndex(srcPath, outPath, lang) {
  const c = fs.readFileSync(srcPath, "utf8");
  
  // Find cards with flexible class matching
  const cardRe = /<a\s+href="\/(?:en\/|ja\/|ko\/)?blog\/[^"]+"\s+class="post-card\s*"[\s\S]*?<\/a>/g;
  const allMatches = [...c.matchAll(cardRe)];
  
  const cards = allMatches.map(m => {
    const html = m[0];
    const dateMatch = html.match(/post-card__date[^>]*>(.*?)<\/span>/);
    const slugMatch = html.match(/href="\/(?:en\/|ja\/|ko\/)?blog\/([^"]+)"/);
    return {
      html,
      date: dateMatch ? dateMatch[1].trim() : "",
      slug: slugMatch ? slugMatch[1].replace(/\/$/, "") : "",
      parsed: dateMatch ? parseDate(dateMatch[1].trim()) : null,
      index: m.index
    };
  });
  
  console.log("=== " + lang + " (" + cards.length + " cards) ===");
  
  // Sort: newest first, then slug for ties
  const sorted = [...cards].sort((a, b) => {
    if (!a.parsed || !b.parsed) return 0;
    const diff = b.parsed.getTime() - a.parsed.getTime();
    if (diff !== 0) return diff;
    return a.slug.localeCompare(b.slug);
  });
  
  console.log("First 3 after sort:");
  sorted.slice(0, 3).forEach(c => console.log("  " + c.date + " | " + c.slug));
  console.log("Last 3 after sort:");
  sorted.slice(-3).forEach(c => console.log("  " + c.date + " | " + c.slug));
  
  // Replace in reverse order to preserve indices
  let result = c;
  for (let i = allMatches.length - 1; i >= 0; i--) {
    const orig = allMatches[i];
    result = result.substring(0, orig.index) + sorted[i].html + result.substring(orig.index + orig[0].length);
  }
  
  // Verify
  const verifyCards = [...result.matchAll(cardRe)].map(m => {
    const dm = m[0].match(/post-card__date[^>]*>(.*?)<\/span>/);
    return dm ? parseDate(dm[1].trim()) : null;
  });
  let outOfOrder = 0;
  for (let i = 1; i < verifyCards.length; i++) {
    if (verifyCards[i-1] && verifyCards[i] && verifyCards[i-1] < verifyCards[i]) outOfOrder++;
  }
  console.log("Out of order after fix: " + outOfOrder);
  
  fs.writeFileSync(outPath, result, "utf8");
  console.log("Saved to: " + outPath + "\n");
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

const base = String.raw`C:\Users\fireh\WorkBuddy\20260326144402\tmg-website`;
sortIndex(base + "\\blog\\index.html", "D:\\Codex\\TMG\\en_index_sorted.html", "EN");
sortIndex(base + "\\ja\\blog\\index.html", "D:\\Codex\\TMG\\ja_index_sorted.html", "JA");
sortIndex(base + "\\ko\\blog\\index.html", "D:\\Codex\\TMG\\ko_index_sorted.html", "KO");
