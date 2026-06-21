const fs = require("fs");
const c = fs.readFileSync("C:\\Users\\fireh\\WorkBuddy\\20260326144402\\tmg-website\\ja\\blog\\ad-billing-models-explained.html", "utf8");

// Get the last part of article content (before closing article tag)
const artEnd = c.indexOf("</article>");
const lastPart = c.substring(Math.max(0, artEnd - 2000), artEnd);
console.log("=== END OF ARTICLE ===");
console.log(lastPart);
