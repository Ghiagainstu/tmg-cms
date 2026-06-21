const fs = require("fs");
const c = fs.readFileSync(String.raw`D:\Codex\TMG\kuaishou_fixed.html`, "utf8");
console.log("callout: " + (/<div class="callout callout--accent">/.test(c) ? "PASS" : "FAIL"));
console.log("feature-grid: " + (/<div class="feature-grid">/.test(c) ? "PASS" : "FAIL"));
console.log("article-table: " + (/class="article-table">/.test(c) ? "PASS" : "FAIL"));
console.log("takeaway-banner: " + (/<div class="takeaway-banner">/.test(c) ? "PASS" : "FAIL"));
console.log("[table]: " + (c.includes("[table]") ? "REMAINING" : "clean"));
console.log("<hr>: " + (c.match(/<hr/g) || []).length));
var engWords = ["Key Insight", "Key Takeaway", "significantly", "massive", "uniquely", "Leveraging"];
for (var w of engWords) { if (c.includes(w)) console.log("ENGLISH: " + w); }
console.log("English: clean");
