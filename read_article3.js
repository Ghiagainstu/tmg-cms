const fs = require("fs");
const c = fs.readFileSync("C:\\Users\\fireh\\WorkBuddy\\20260326144402\\tmg-website\\ja\\blog\\ad-billing-models-explained.html", "utf8");

// Find the CTA section and sidebar
const footerIdx = c.indexOf("<!-- Footer -->");
const sidebarIdx = c.indexOf("<!-- Sidebar -->");
const ctaIdx = c.indexOf("cta-section");

console.log("Footer at: " + footerIdx);
console.log("Sidebar at: " + sidebarIdx);
console.log("CTA at: " + ctaIdx);

// Get from article end to footer
const artEnd = c.indexOf("</article>") + "</article>".length;
console.log("Article ends at: " + artEnd);

// Show CTA and sidebar area
if (ctaIdx > 0) {
  console.log("\n=== CTA SECTION ===");
  console.log(c.substring(ctaIdx - 50, Math.min(ctaIdx + 800, c.length)));
}

// Check if there's a toc
const tocIdx = c.indexOf("toc__title");
if (tocIdx > 0) {
  console.log("\n=== TOC ===");
  console.log(c.substring(tocIdx - 50, Math.min(tocIdx + 500, c.length)));
}
