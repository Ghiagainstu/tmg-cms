const fs = require("fs");
const path = require("path");
const dir = "C:\\Users\\fireh\\WorkBuddy\\20260326144402\\tmg-website\\ja\\blog";
const files = fs.readdirSync(dir).filter(f => f.endsWith(".html") && f !== "index.html");

const indexC = fs.readFileSync(path.join(dir, "index.html"), "utf8");
const idxTimes = [...indexC.matchAll(/post-card__read-time">(.*?)<\/span>/g)].map(m => m[1].trim());

// Articles with 1分で読める (suspiciously short)
const shortArticles = [];
for (const file of files) {
  const c = fs.readFileSync(path.join(dir, file), "utf8");
  const slug = file.replace(".html", "");
  // Check word count of article body
  const articleMatch = c.match(/<article[\s\S]*?<\/article>/);
  if (articleMatch) {
    const text = articleMatch[0].replace(/<[^>]+>/g, "").trim();
    const chars = text.length;
    if (chars < 2000) {
      shortArticles.push({ slug, chars });
    }
  }
}
console.log("Articles with <2000 chars: " + shortArticles.length);
shortArticles.sort((a,b) => a.chars - b.chars).forEach(s => console.log("  " + s.slug + ": " + s.chars + " chars"));
