const fs = require("fs");
const dir = "C:\\Users\\fireh\\WorkBuddy\\20260326144402\\tmg-website\\ko\\blog";
const files = fs.readdirSync(dir).filter(f => f.endsWith(".html") && f !== "index.html");

// Find a KO article with all 4 components
for (const file of files) {
  const c = fs.readFileSync(require("path").join(dir, file), "utf8");
  const hasCallout = /<div class="callout callout--accent"/.test(c);
  const hasGrid = /<div class="feature-grid"/.test(c);
  const hasTable = /<div class="article-table"/.test(c);
  const hasBanner = /<div class="takeaway-banner"/.test(c);
  if (hasCallout && hasGrid && hasTable && hasBanner) {
    console.log("Template: " + file);
    // Extract each component
    const calloutMatch = c.match(/<div class="callout callout--accent">([\s\S]*?)<\/div>\s*<\/div>/);
    if (calloutMatch) console.log("\n=== CALLOUT ===\n" + calloutMatch[0].substring(0, 500));
    
    const gridMatch = c.match(/<div class="feature-grid">([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/);
    if (gridMatch) console.log("\n=== FEATURE GRID ===\n" + gridMatch[0].substring(0, 800));
    
    const tableMatch = c.match(/<div class="article-table">([\s\S]*?)<\/table>/);
    if (tableMatch) console.log("\n=== TABLE ===\n" + tableMatch[0].substring(0, 800));
    
    const bannerMatch = c.match(/<div class="takeaway-banner">([\s\S]*?)<\/div>\s*<\/div>/);
    if (bannerMatch) console.log("\n=== BANNER ===\n" + bannerMatch[0].substring(0, 500));
    
    break;
  }
}
