const fs = require("fs");
const filePath = String.raw`D:\Codex\TMG\deepseek-v4_fixed3.html`;
let c = fs.readFileSync(filePath, "utf8");

// Find the YAML by searching for "title:"
const titleIdx = c.indexOf("title: \"DeepSeek V4");
if (titleIdx >= 0) {
  // Go back to find <p>
  const pStart = c.lastIndexOf("<p>", titleIdx);
  // Find end
  const catEnd = c.indexOf("category: TMG-Blog</p>", titleIdx);
  const fullEnd = catEnd + "category: TMG-Blog</p>".length + 1; // +1 for newline
  const removed = c.substring(pStart, fullEnd);
  console.log("Removing: " + removed.substring(0, 80) + "...");
  c = c.substring(0, pStart) + c.substring(fullEnd);
  console.log("Removed!");
}

// Verify
const artStart = c.indexOf("<article");
console.log("\n=== ARTICLE START ===");
console.log(c.substring(artStart, artStart + 300));
console.log("\nYAML: " + (c.includes("category: TMG-Blog") ? "STILL THERE" : "clean"));

fs.writeFileSync(filePath, c, "utf8");
