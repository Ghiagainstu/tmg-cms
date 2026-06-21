const fs = require("fs");
const c = fs.readFileSync(String.raw`C:\Users\fireh\WorkBuddy\20260326144402\tmg-website\ja\blog\deepseek-v4-price-cut-geo.html`, "utf8");

// Check for ALL English text in article body
const article = c.match(/<article[\s\S]*?<\/article>/);
if (article) {
  const text = article[0];
  // Find all paragraphs
  const paragraphs = [...text.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)];
  console.log("=== ENGLISH/PROBLEMATIC PARAGRAPHS ===");
  for (const p of paragraphs) {
    const clean = p[1].replace(/<[^>]+>/g, "").trim();
    // Check for English-heavy content
    const engChars = (clean.match(/[A-Za-z]/g) || []).length;
    const totalChars = clean.length;
    if (totalChars > 10 && engChars / totalChars > 0.5) {
      console.log("ENG P: " + clean.substring(0, 150));
    }
  }
  
  // Check for <hr>
  const hrs = [...text.matchAll(/<hr\s*\/?>/g)];
  console.log("\n<hr> in article: " + hrs.length);
  
  // Check for any remaining English labels
  const engLabels = ["Key Insight", "Key Takeaway", "Key Data", "Market Signal", "Published on", "Live URL", "Source:"];
  for (const l of engLabels) {
    if (text.includes(l)) console.log("LABEL: " + l);
  }
}

// Check for <hr> outside article too
const allHrs = (c.match(/<hr/g) || []).length;
console.log("\nTotal <hr> in file: " + allHrs);

// Check for any English in visible body
const bodyMatch = c.match(/<body[\s\S]*<\/body>/);
if (bodyMatch) {
  // Find English sentences
  const engSentences = [...bodyMatch[0].matchAll(/>[^<]*[A-Za-z]{5,}[^<]*</g)];
  console.log("\n=== ALL ENGLISH TEXT IN BODY ===");
  for (const m of engSentences) {
    const text = m[0].replace(/[<>]/g, "").trim();
    if (text.length > 20 && /^[A-Za-z\s\.\,\-\—\;\:\'\"\(\)\[\]\/\d\%\$]+$/.test(text)) {
      console.log("  " + text.substring(0, 150));
    }
  }
}
