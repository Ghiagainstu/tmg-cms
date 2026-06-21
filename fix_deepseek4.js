const fs = require("fs");
const filePath = String.raw`D:\Codex\TMG\deepseek-v4_fixed2.html`;
let c = fs.readFileSync(filePath, "utf8");

// Find the YAML block and remove it
const artStart = c.indexOf("<article");
const artContent = c.substring(artStart);
const yamlStart = artContent.indexOf("---");
const yamlEnd = artContent.indexOf("category: TMG-Blog");
if (yamlStart >= 0 && yamlEnd >= 0) {
  const fullYamlEnd = artContent.indexOf("</p>", yamlEnd) + 4;
  // Remove from <article> tag to after the YAML block
  const before = c.substring(0, artStart);
  const after = artContent.substring(fullYamlEnd).trimStart();
  c = before + after;
  console.log("Removed YAML block (char-based)");
}

// Remove English H1 if still present
c = c.replace(/<h1>DeepSeek V4 Cuts[\s\S]*?<\/h1>\s*/, "");

// Check result
const artStart2 = c.indexOf("<article");
console.log("\n=== ARTICLE START ===");
console.log(c.substring(artStart2, artStart2 + 500));

const h1Count = (c.match(/<h1/g) || []).length;
console.log("\nH1 count: " + h1Count);

fs.writeFileSync(filePath, c, "utf8");
console.log("Saved");
