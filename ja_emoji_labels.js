const fs = require("fs");
const path = require("path");
const dir = "C:\\Users\\fireh\\WorkBuddy\\20260326144402\\tmg-website\\ja\\blog";
const files = fs.readdirSync(dir).filter(f => f.endsWith(".html") && f !== "index.html");

const emojiLabels = {};
for (const file of files) {
  const c = fs.readFileSync(path.join(dir, file), "utf8");
  const slug = file.replace(".html", "");
  const labels = [...c.matchAll(/<div class="callout__label">(.*?)<\/div>/g)].map(m => m[1].trim());
  for (const label of labels) {
    if (/[\u{1F300}-\u{1FFFF}]/u.test(label) || /Key Insight|Market Signal|Pro Tip|Watch Out/.test(label)) {
      if (!emojiLabels[label]) emojiLabels[label] = [];
      emojiLabels[label].push(slug);
    }
  }
}
for (const [label, slugs] of Object.entries(emojiLabels)) {
  console.log(label + " (" + slugs.length + "):");
  slugs.forEach(s => console.log("  " + s));
}
