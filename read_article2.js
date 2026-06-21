const fs = require("fs");
const c = fs.readFileSync("C:\\Users\\fireh\\WorkBuddy\\20260326144402\\tmg-website\\ja\\blog\\ad-billing-models-explained.html", "utf8");

// Get the full article content between <article> tags
const artStart = c.indexOf("<article");
const artEnd = c.indexOf("</article>") + "</article>".length;
const article = c.substring(artStart, artEnd);
console.log(article);
