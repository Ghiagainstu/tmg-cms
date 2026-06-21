const fs = require("fs");
const c = fs.readFileSync(String.raw`D:\Codex\TMG\cpm-ocpm-ecpm_fixed.html`, "utf8");
console.log("=== VERIFICATION ===");
console.log("callout: " + (/<div class="callout callout--accent">/.test(c) ? "PASS" : "FAIL"));
console.log("feature-grid: " + (/<div class="feature-grid">/.test(c) ? "PASS" : "FAIL"));
console.log("article-table: " + (/class="article-table">/.test(c) ? "PASS" : "FAIL"));
console.log("takeaway-banner: " + (/<div class="takeaway-banner">/.test(c) ? "PASS" : "FAIL"));
console.log("[table]: " + (c.includes("[table]") ? "REMAINING" : "clean"));
const engWords = ["Key Insight", "Key Takeaway", "significantly", "massive", "uniquely", "Leveraging"];
for (const w of engWords) { if (c.includes(w)) console.log("ENGLISH: " + w); }
console.log("English: clean");
console.log("支払: " + (c.includes("\u652f\u6255") ? "correct" : "check"));
console.log("主導権: " + (c.includes("\u4e3b\u5c0e\u6a29") ? "correct" : "check"));
