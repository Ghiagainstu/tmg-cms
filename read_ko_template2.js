const fs = require("fs");
const path = require("path");
const dir = "C:\\Users\\fireh\\WorkBuddy\\20260326144402\\tmg-website\\ko\\blog";
const files = fs.readdirSync(dir).filter(f => f.endsWith(".html") && f !== "index.html");

for (const file of files) {
  const c = fs.readFileSync(path.join(dir, file), "utf8");
  const hasCallout = /class="callout callout--accent"/.test(c);
  const hasGrid = /class="feature-grid"/.test(c);
  const hasTable = /class="article-table"/.test(c);
  const hasBanner = /class="takeaway-banner"/.test(c);
  if (hasCallout && hasGrid && hasTable && hasBanner) {
    console.log("Template: " + file);
    
    // Extract callout (find the div in article body, not CSS)
    const calloutIdx = c.indexOf('<div class="callout callout--accent">');
    if (calloutIdx > 0 && calloutIdx < 45000) {
      const calloutEnd = c.indexOf("</div>", calloutIdx + 200);
      console.log("\n=== CALLOUT ===");
      console.log(c.substring(calloutIdx, calloutEnd + 6));
    }
    
    // Extract feature-grid
    const gridIdx = c.indexOf('<div class="feature-grid">');
    if (gridIdx > 0 && gridIdx < 45000) {
      console.log("\n=== FEATURE GRID ===");
      console.log(c.substring(gridIdx, Math.min(gridIdx + 1200, c.length)));
    }
    
    // Extract article-table  
    const tableIdx = c.indexOf('<div class="article-table">');
    if (tableIdx > 0 && tableIdx < 45000) {
      console.log("\n=== TABLE ===");
      console.log(c.substring(tableIdx, Math.min(tableIdx + 1200, c.length)));
    }
    
    // Extract takeaway-banner
    const bannerIdx = c.indexOf('<div class="takeaway-banner">');
    if (bannerIdx > 0 && bannerIdx < 45000) {
      console.log("\n=== BANNER ===");
      console.log(c.substring(bannerIdx, Math.min(bannerIdx + 500, c.length)));
    }
    
    break;
  }
}
