const fs = require("fs");
const filePath = String.raw`D:\Codex\TMG\baidu-demographics_fixed.html`;
const c = fs.readFileSync(filePath, "utf8");

console.log("=== VERIFICATION ===");
console.log("callout callout--accent: " + (/<div class="callout callout--accent">/.test(c) ? "PASS" : "FAIL"));
console.log("feature-grid: " + (/<div class="feature-grid">/.test(c) ? "PASS" : "FAIL"));
console.log("article-table: " + (/class="article-table">/.test(c) ? "PASS" : "FAIL"));
console.log("takeaway-banner: " + (/<div class="takeaway-banner">/.test(c) ? "PASS" : "FAIL"));

// English check
const engWords = ["Key Insight", "Key Takeaway", "Key Data", "significantly", "massive", "uniquely", "Leveraging"];
let clean = true;
for (const w of engWords) {
  if (c.includes(w)) { console.log("ENGLISH: " + w); clean = false; }
}
if (clean) console.log("English: clean");

// Encoding check
console.log("不動産: " + (c.includes("\u4e0d\u52d5\u7523") ? "correct" : "WRONG"));
console.log("高意図: " + (c.includes("\u9ad8\u610f\u56f3") ? "correct" : "check"));
console.log("リターゲティング: " + (c.includes("\u30ea\u30bf\u30fc\u30b2\u30c6\u30a3\u30f3\u30b0") ? "correct" : "check"));
