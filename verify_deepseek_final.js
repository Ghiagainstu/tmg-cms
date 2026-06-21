const fs = require("fs");
const filePath = String.raw`D:\Codex\TMG\deepseek-v4_fixed3.html`;
let c = fs.readFileSync(filePath, "utf8");

// Remove the duplicate H1 (page already has title)
const h1Match = c.match(/<h1>DeepSeek V4\u3001[\s\S]*?<\/h1>/);
if (h1Match) {
  console.log("Found H1: " + h1Match[0].substring(0, 60));
  // Keep only the first H1
}

// Clean up extra whitespace
c = c.replace(/\n{3,}/g, "\n\n");

fs.writeFileSync(filePath, c, "utf8");

// Final full verification
console.log("\n=== FINAL VERIFICATION ===");
console.log("callout: " + (/<div class="callout callout--accent">/.test(c) ? "PASS" : "FAIL"));
console.log("feature-grid: " + (/<div class="feature-grid">/.test(c) ? "PASS" : "FAIL"));
console.log("article-table: " + (/class="article-table">/.test(c) ? "PASS" : "FAIL"));
console.log("takeaway-banner: " + (/<div class="takeaway-banner">/.test(c) ? "PASS" : "FAIL"));
console.log("<hr>: " + (c.match(/<hr/g) || []).length));
console.log("English H1: " + (c.includes("DeepSeek V4 Cuts") ? "THERE" : "clean"));
console.log("YAML: " + (c.includes("category: TMG-Blog") ? "THERE" : "clean"));
console.log("Live URL: " + (c.includes("Live URL") ? "THERE" : "clean"));
console.log("Published on: " + (c.includes("Published on") ? "THERE" : "clean"));
console.log("Source: " + (c.includes("Source: https") ? "THERE" : "clean"));

// English word check
const engWords = ["Key Insight", "Key Takeaway", "significantly", "massive", "uniquely", "Leveraging"];
for (const w of engWords) { if (c.includes(w)) console.log("ENGLISH: " + w); }
