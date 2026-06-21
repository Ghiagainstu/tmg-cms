const fs = require("fs");
const filePath = String.raw`D:\Codex\TMG\deepseek-v4_fixed2.html`;
let c = fs.readFileSync(filePath, "utf8");

// Remove the English H1
c = c.replace(/<h1>DeepSeek V4 Cuts Token Prices 75 Percent[\s\S]*?<\/h1>\s*/, "");
console.log("Removed English H1");

// Remove YAML frontmatter block
c = c.replace(/<p>\u00ef\u00bb\u00bf---[\s\S]*?category: TMG-Blog<\/p>\s*/, "");
console.log("Removed YAML frontmatter");

// Also try without BOM
c = c.replace(/<p>---[\s\S]*?category: TMG-Blog<\/p>\s*/, "");
console.log("Removed YAML (no BOM)");

// Check if there's a second H1 (the Japanese one) - if so, it's fine
const h1Count = (c.match(/<h1/g) || []).length;
console.log("H1 count: " + h1Count);

// Show article start again
const artStart = c.indexOf("<article");
console.log("\n=== ARTICLE START ===");
console.log(c.substring(artStart, artStart + 600));

fs.writeFileSync(filePath, c, "utf8");
