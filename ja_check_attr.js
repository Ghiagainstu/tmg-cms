const fs = require("fs");
const c = fs.readFileSync("C:\\Users\\fireh\\WorkBuddy\\20260326144402\\tmg-website\\ja\\blog\\attribution-models-guide.html", "utf8");
// Find callout label
const cl = c.match(/<div class="callout__label">(.*?)<\/div>/);
console.log("Callout label: " + (cl ? cl[1] : "none"));
// Find callout text
const ct = c.match(/<div class="callout callout--accent">([\s\S]*?)<\/div>/);
if (ct) console.log("Callout: " + ct[1].substring(0, 200));
// Find takeaway
const tk = c.match(/takeaway-banner([\s\S]{0,500}?)<\/div>\s*<\/div>/);
if (tk) console.log("Banner: " + tk[1].substring(0, 200));
// Check has feature-grid?
console.log("Has feature-grid: " + /<div class="feature-grid"/.test(c));
console.log("Has article-table: " + /<div class="article-table"/.test(c));
