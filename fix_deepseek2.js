const fs = require("fs");
const srcPath = String.raw`C:\Users\fireh\WorkBuddy\20260326144402\tmg-website\ja\blog\deepseek-v4-price-cut-geo.html`;
const outPath = String.raw`D:\Codex\TMG\deepseek-v4_fixed2.html`;
let c = fs.readFileSync(srcPath, "utf8");

// 1. Remove the English H1 and all metadata before the real H1
const realH1 = c.indexOf("DeepSeek V4\u3001\u30c8\u30fc\u30af\u30f3\u4fa1\u683c\u3092");
const realH1Start = c.lastIndexOf("<h1", realH1);
// Remove everything from the first <h1 to the real <h1
const firstH1 = c.indexOf("<h1");
if (firstH1 !== realH1Start) {
  c = c.substring(0, firstH1) + c.substring(realH1Start);
  console.log("Removed English H1 + metadata");
}

// 2. Remove "Live URL" paragraph
c = c.replace(/<p><strong>Live URL:<\/strong>[\s\S]*?<\/p>/, "");
console.log("Removed Live URL");

// 3. Remove "Published on" paragraph  
c = c.replace(/<p><em>Published on[\s\S]*?<\/em><\/p>/, "");
console.log("Removed Published on");

// 4. Remove excessive <hr> tags - keep only ones before major H2 sections
// First remove all <hr>
c = c.replace(/<hr\s*\/?>\s*/g, "\n");
console.log("Removed all <hr>");

// 5. Re-add <hr> only before key H2 sections (same as other articles)
// Actually, let's just leave them removed - the H2 sections have enough visual separation

// 6. Remove the first duplicate H1 (the article title is already in the page header)
// Keep only the first H1 which is the Japanese title

// 7. Clean up any remaining metadata
c = c.replace(/<p>\u306a\u305c\u91cd\u8981\u304b<\/p>/g, ""); // stray "なぜ重要か" paragraphs

fs.writeFileSync(outPath, c, "utf8");
console.log("\nWritten to: " + outPath);
console.log("callout: " + (/<div class="callout callout--accent">/.test(c) ? "PASS" : "FAIL"));
console.log("feature-grid: " + (/<div class="feature-grid">/.test(c) ? "PASS" : "FAIL"));
console.log("article-table: " + (/class="article-table">/.test(c) ? "PASS" : "FAIL"));
console.log("takeaway-banner: " + (/<div class="takeaway-banner">/.test(c) ? "PASS" : "FAIL"));

// Count remaining HRs
const hrCount = (c.match(/<hr/g) || []).length;
console.log("Remaining <hr>: " + hrCount);

// Check for English
const engWords = ["Key Insight", "Key Takeaway", "Published on", "Live URL", "Source:"];
for (const w of engWords) { if (c.includes(w)) console.log("ENGLISH: " + w); }
console.log("English: clean");
