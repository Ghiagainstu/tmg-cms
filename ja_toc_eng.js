const fs = require("fs");
const path = require("path");
const dir = "C:\\Users\\fireh\\WorkBuddy\\20260326144402\\tmg-website\\ja\\blog";
const files = fs.readdirSync(dir).filter(f => f.endsWith(".html") && f !== "index.html");

const engTOC = [];
for (const file of files) {
  const c = fs.readFileSync(path.join(dir, file), "utf8");
  const slug = file.replace(".html", "");
  const tocs = [...c.matchAll(/class="toc__link">(.*?)<\/a>/g)].map(m => m[1].trim());
  const engEntries = tocs.filter(t => /^[A-Za-z\s\d\-:]+$/.test(t) && t.length > 2);
  if (engEntries.length > 0) {
    engTOC.push({ slug, entries: engEntries });
  }
}
console.log("Articles with English TOC: " + engTOC.length);
engTOC.forEach(e => console.log("  " + e.slug + ": " + e.entries.join(", ")));
