const fs = require("fs");
const c = fs.readFileSync("C:\\Users\\fireh\\WorkBuddy\\20260326144402\\tmg-website\\ja\\blog\\ad-billing-models-explained.html", "utf8");

// Extract article body
const artMatch = c.match(/<article[\s\S]*?<\/article>/);
if (artMatch) {
  // Get headings
  const headings = [...artMatch[0].matchAll(/<h([23])[^>]*>(.*?)<\/h[23]>/g)];
  console.log("=== HEADINGS ===");
  headings.forEach(h => console.log("H" + h[1] + ": " + h[2].replace(/<[^>]+>/g, "")));
  
  // Get word count
  const text = artMatch[0].replace(/<[^>]+>/g, "").trim();
  console.log("\n=== STATS ===");
  console.log("Chars: " + text.length);
  
  // Check existing components
  console.log("\n=== COMPONENTS ===");
  console.log("callout: " + /<div class="callout callout--accent"/.test(c));
  console.log("feature-grid: " + /<div class="feature-grid"/.test(c));
  console.log("article-table: " + /<div class="article-table"/.test(c));
  console.log("takeaway-banner: " + /<div class="takeaway-banner"/.test(c));
  
  // Check CTA section
  const cta = c.match(/cta-section([\s\S]{0,500}?)<\/section/);
  if (cta) console.log("\n=== CTA ===\n" + cta[1].substring(0, 300));
  
  // Check sidebar/TOC
  const toc = [...c.matchAll(/class="toc__link">(.*?)<\/a>/g)];
  console.log("\n=== TOC ===");
  toc.forEach(t => console.log("  " + t[1]));
}
