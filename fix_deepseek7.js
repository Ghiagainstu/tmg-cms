const fs = require("fs");
const filePath = String.raw`D:\Codex\TMG\deepseek-v4_fixed3.html`;
let c = fs.readFileSync(filePath, "utf8");

// Find and remove the YAML block by index
const yamlStart = c.indexOf("---\ntitle:");
if (yamlStart >= 0) {
  // Go back to find the <p> tag
  const pStart = c.lastIndexOf("<p>", yamlStart);
  const yamlEnd = c.indexOf("category: TMG-Blog</p>", yamlStart);
  if (yamlEnd >= 0) {
    const fullEnd = yamlEnd + "category: TMG-Blog</p>".length;
    c = c.substring(0, pStart) + c.substring(fullEnd + 1);
    console.log("Removed YAML block (pos " + pStart + " to " + fullEnd + ")");
  }
}

// Clean up
c = c.replace(/\n{3,}/g, "\n\n");

// Verify
const artStart = c.indexOf("<article");
console.log("\n=== ARTICLE START ===");
console.log(c.substring(artStart, artStart + 400));

console.log("\nYAML: " + (c.includes("category: TMG-Blog") ? "STILL THERE" : "clean"));

fs.writeFileSync(filePath, c, "utf8");
