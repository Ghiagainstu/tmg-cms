const fs = require("fs");
const c = fs.readFileSync(String.raw`D:\Codex\TMG\cpm-is-rising-bad_fixed.html`, "utf8");
console.log("=== VERIFICATION ===");
console.log("callout: " + (/<div class="callout callout--accent">/.test(c) ? "PASS" : "FAIL"));
console.log("feature-grid: " + (/<div class="feature-grid">/.test(c) ? "PASS" : "FAIL"));
console.log("article-table: " + (/class="article-table">/.test(c) ? "PASS" : "FAIL"));
console.log("takeaway-banner: " + (/<div class="takeaway-banner">/.test(c) ? "PASS" : "FAIL"));
const engWords = ["Key Insight", "Key Takeaway", "significantly", "massive", "uniquely", "Leveraging", "decent", "killing"];
let clean = true;
for (const w of engWords) { if (c.includes(w)) { console.log("ENGLISH: " + w); clean = false; } }
if (clean) console.log("English: clean");
console.log("Encoding: " + (c.includes("\u9ad8\u610f\u56f3") ? "OK" : "check"));
