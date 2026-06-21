const fs = require("fs");
const filePath = String.raw`D:\Codex\TMG\deepseek-v4_fixed3.html`;
let c = fs.readFileSync(filePath, "utf8");
console.log("callout: " + (/<div class="callout callout--accent">/.test(c) ? "PASS" : "FAIL"));
console.log("feature-grid: " + (/<div class="feature-grid">/.test(c) ? "PASS" : "FAIL"));
console.log("article-table: " + (/class="article-table">/.test(c) ? "PASS" : "FAIL"));
console.log("takeaway-banner: " + (/<div class="takeaway-banner">/.test(c) ? "PASS" : "FAIL"));
var hrCount = (c.match(/<hr/g) || []).length;
console.log("hr tags: " + hrCount);
console.log("English H1: " + (c.includes("DeepSeek V4 Cuts") ? "THERE" : "clean"));
console.log("YAML: " + (c.includes("category: TMG-Blog") ? "THERE" : "clean"));
console.log("Live URL: " + (c.includes("Live URL") ? "THERE" : "clean"));
console.log("Published on: " + (c.includes("Published on") ? "THERE" : "clean"));
console.log("Source: " + (c.includes("Source: https") ? "THERE" : "clean"));
var engWords = ["Key Insight", "Key Takeaway", "significantly", "massive", "uniquely", "Leveraging"];
for (var w of engWords) { if (c.includes(w)) console.log("ENGLISH: " + w); }
