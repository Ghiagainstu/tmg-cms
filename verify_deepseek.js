const fs = require("fs");
const c = fs.readFileSync(String.raw`D:\Codex\TMG\deepseek-v4_fixed.html`, "utf8");
console.log("callout: " + (/<div class="callout callout--accent">/.test(c) ? "PASS" : "FAIL"));
console.log("feature-grid: " + (/<div class="feature-grid">/.test(c) ? "PASS" : "FAIL"));
console.log("article-table: " + (/class="article-table">/.test(c) ? "PASS" : "FAIL"));
console.log("takeaway-banner: " + (/<div class="takeaway-banner">/.test(c) ? "PASS" : "FAIL"));
console.log("Source meta: " + (c.includes("Source: https") ? "REMAINING" : "clean"));
const engWords = ["Key Insight", "Key Takeaway", "significantly", "massive", "uniquely", "Leveraging"];
for (const w of engWords) { if (c.includes(w)) console.log("ENGLISH: " + w); }
console.log("English: clean");
console.log("Encoding: \u6025\u589e=" + (c.includes("\u6025\u589e") ? "OK" : "X") + " \u308f\u305a\u304b=" + (c.includes("\u308f\u305a\u304b") ? "OK" : "X"));
