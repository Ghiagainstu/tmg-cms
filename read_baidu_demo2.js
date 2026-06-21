const fs = require("fs");
const c = fs.readFileSync("C:\\Users\\fireh\\WorkBuddy\\20260326144402\\tmg-website\\ja\\blog\\baidu-demographics-who-are-these-735m-users.html", "utf8");

// Check for existing English content
const engWords = ["Key Insight", "Market Signal", "Key Takeaway", "Key Data", "significantly", "massive", "uniquely", "Leveraging"];
for (const w of engWords) {
  if (c.includes(w)) console.log("ENGLISH: " + w);
}

// Check existing callout types
const calloutTypes = [...c.matchAll(/<div class="callout[^"]*">/g)];
calloutTypes.forEach(m => console.log("Callout type: " + m[0]));

// Get article structure (first 2000 chars)
const artStart = c.indexOf("<article");
const firstPart = c.substring(artStart, artStart + 2000);
console.log("\n=== ARTICLE START ===");
console.log(firstPart);
