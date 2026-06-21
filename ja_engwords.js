const fs = require("fs");
const path = require("path");
const dir = "C:\\Users\\fireh\\WorkBuddy\\20260326144402\\tmg-website\\ja\\blog";
const files = fs.readdirSync(dir).filter(f => f.endsWith(".html") && f !== "index.html");

const engWords = ["significantly", "massive", "uniquely", "Leveraging", "Key Insight", "Key Takeaway", "Market Signal", "Key Data"];
const found = {};
for (const file of files) {
  const c = fs.readFileSync(path.join(dir, file), "utf8");
  const slug = file.replace(".html", "");
  const articleMatch = c.match(/<article[\s\S]*?<\/article>/);
  if (!articleMatch) continue;
  const text = articleMatch[0];
  for (const word of engWords) {
    if (text.includes(word)) {
      if (!found[word]) found[word] = [];
      found[word].push(slug);
    }
  }
}
for (const [word, slugs] of Object.entries(found)) {
  console.log(word + " (" + slugs.length + "):");
  slugs.forEach(s => console.log("  " + s));
}
