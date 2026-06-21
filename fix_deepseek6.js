const fs = require("fs");
const srcPath = String.raw`C:\Users\fireh\WorkBuddy\20260326144402\tmg-website\ja\blog\deepseek-v4-price-cut-geo.html`;
const outPath = String.raw`D:\Codex\TMG\deepseek-v4_fixed3.html`;
let c = fs.readFileSync(srcPath, "utf8");

// 1. Remove English H1 line
c = c.replace(/<h1>DeepSeek V4 Cuts Token Prices 75 Percent[^<]*<\/h1>\n?/, "");
console.log("Removed English H1");

// 2. Remove YAML frontmatter (wrapped in <p> tags)
// Find the <p> that contains "---" at the start
c = c.replace(/<p>\uFEFF?---\n[\s\S]*?category: TMG-Blog<\/p>\n?/, "");
console.log("Removed YAML frontmatter");

// 3. Remove "Live URL" paragraph
c = c.replace(/<p><strong>Live URL:<\/strong>[^<]*<\/p>\n?/, "");

// 4. Remove "Published on" paragraph + surrounding <hr>
c = c.replace(/<hr\s*\/?>\s*<p><em>Published on[^<]*<\/em><\/p>\n?/, "");

// 5. Remove all <hr> tags
const hrCount = (c.match(/<hr\s*\/?>/g) || []).length;
c = c.replace(/<hr\s*\/?>\s*/g, "");
console.log("Removed " + hrCount + " <hr> tags");

// 6. Remove source metadata at bottom
c = c.replace(/<p><em>Source: https:\/\/www\.tuyuesouxin\.cn\/blog\/deepseek-v4-price-cut-geo\/<\/em><br\s*\/?>\n<em>English:[^<]*<\/em><br\s*\/?>\n<em>\ud83c\udd0f\ud83c\uddf7[^<]*<\/em><\/p>\n?/, "");

// Clean up extra blank lines
c = c.replace(/\n{3,}/g, "\n\n");

fs.writeFileSync(outPath, c, "utf8");

// Verify
const artStart = c.indexOf("<article");
console.log("\n=== ARTICLE START ===");
console.log(c.substring(artStart, artStart + 600));

console.log("\n=== VERIFICATION ===");
console.log("callout: " + (/<div class="callout callout--accent">/.test(c) ? "PASS" : "FAIL"));
console.log("feature-grid: " + (/<div class="feature-grid">/.test(c) ? "PASS" : "FAIL"));
console.log("article-table: " + (/class="article-table">/.test(c) ? "PASS" : "FAIL"));
console.log("takeaway-banner: " + (/<div class="takeaway-banner">/.test(c) ? "PASS" : "FAIL"));
console.log("<hr> remaining: " + (c.match(/<hr/g) || []).length);
console.log("English H1: " + (c.includes("DeepSeek V4 Cuts") ? "STILL THERE" : "clean"));
console.log("YAML: " + (c.includes("category: TMG-Blog") ? "STILL THERE" : "clean"));
console.log("Live URL: " + (c.includes("Live URL") ? "STILL THERE" : "clean"));
console.log("Published on: " + (c.includes("Published on") ? "STILL THERE" : "clean"));
console.log("Source: " + (c.includes("Source: https") ? "STILL THERE" : "clean"));
console.log("English Blog: " + (c.includes("English Blog Post") ? "STILL THERE" : "clean"));
