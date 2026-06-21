const fs = require("fs");
const c = fs.readFileSync(String.raw`C:\Users\fireh\WorkBuddy\20260326144402\tmg-website\ja\blog\deepseek-v4-price-cut-geo.html`, "utf8");

// Find all <hr> tags
const hrs = [...c.matchAll(/<hr\s*\/?>/g)];
console.log("Total <hr> tags: " + hrs.length);
hrs.forEach((m, i) => {
  const idx = m.index;
  const before = c.substring(Math.max(0, idx - 80), idx).replace(/\s+/g, " ").trim();
  console.log("HR " + i + " at " + idx + ": ...after: " + before.slice(-40));
});

// Find all standalone dashes or dividers
const dashLines = [...c.matchAll(/<p>\s*[-—–]+\s*<\/p>/g)];
console.log("\nDash-only paragraphs: " + dashLines.length);
dashLines.forEach((m, i) => {
  console.log("  " + i + ": " + m[0]);
});

// Find all English sentences/phrases in article body
const article = c.match(/<article[\s\S]*?<\/article>/);
if (article) {
  const text = article[0];
  // Look for English phrases (more than 3 consecutive English words)
  const engPhrases = [...text.matchAll(/\b[A-Z][a-z]+(?:\s+[a-z]+){2,}\b/g)];
  console.log("\nEnglish phrases in body: " + engPhrases.length);
  engPhrases.forEach(m => console.log("  " + m[0]));
  
  // Also check for full English sentences
  const engSentences = [...text.matchAll(/<p>[^<]*[A-Za-z]{4,}[^<]*<\/p>/g)];
  console.log("\nParagraphs with English: " + engSentences.length);
  engSentences.forEach(m => {
    const clean = m[0].replace(/<[^>]+>/g, "").trim();
    if (/^[A-Za-z\s\.\,\-\—\;\:\'\"\(\)]+$/.test(clean) && clean.length > 20) {
      console.log("  ENG PARAGRAPH: " + clean.substring(0, 120));
    }
  });
}
