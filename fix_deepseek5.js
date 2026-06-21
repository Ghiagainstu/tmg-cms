const fs = require("fs");
const srcPath = String.raw`C:\Users\fireh\WorkBuddy\20260326144402\tmg-website\ja\blog\deepseek-v4-price-cut-geo.html`;
const outPath = String.raw`D:\Codex\TMG\deepseek-v4_fixed3.html`;
let c = fs.readFileSync(srcPath, "utf8");

// Find article tag
const artStart = c.indexOf("<article");
const artTag = c.substring(artStart, c.indexOf(">", artStart) + 1);
const afterArtTag = c.indexOf(">", artStart) + 1;

// Find the Japanese H1
const jaH1 = "DeepSeek V4\u3001\u30c8\u30fc\u30af\u30f3\u4fa1\u683c\u309275%\u5024\u4e0b\u3052";
const jaH1Idx = c.indexOf(jaH1);
const jaH1Start = c.lastIndexOf("<h1", jaH1Idx);

// Everything between article tag and Japanese H1 is garbage
const before = c.substring(0, afterArtTag);
const after = c.substring(jaH1Start);
c = before + "\n" + after;
console.log("Removed English H1 + YAML metadata");

// Remove <hr> tags
const hrCount = (c.match(/<hr\s*\/?>/g) || []).length;
c = c.replace(/<hr\s*\/?>\s*/g, "");
console.log("Removed " + hrCount + " <hr> tags");

// Remove "Live URL" paragraph if present
c = c.replace(/<p><strong>Live URL:<\/strong>[\s\S]*?<\/p>\s*/, "");

// Remove "Published on" paragraph if present
c = c.replace(/<p><em>Published on[\s\S]*?<\/em><\/p>\s*/, "");

// Remove source/translation metadata at bottom
c = c.replace(/<p><em>Source: [\s\S]*?<\/p>\s*/, "");

// Clean up double blank lines
c = c.replace(/\n{3,}/g, "\n\n");

fs.writeFileSync(outPath, c, "utf8");

// Verify
const artStart2 = c.indexOf("<article");
console.log("\n=== ARTICLE START ===");
console.log(c.substring(artStart2, artStart2 + 500));

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
