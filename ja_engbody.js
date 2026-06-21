const fs = require("fs");
const path = require("path");
const dir = "C:\\Users\\fireh\\WorkBuddy\\20260326144402\\tmg-website\\ja\\blog";
const files = fs.readdirSync(dir).filter(f => f.endsWith(".html") && f !== "index.html");

const mixed = [];
for (const file of files) {
  const c = fs.readFileSync(path.join(dir, file), "utf8");
  const slug = file.replace(".html", "");
  const articleMatch = c.match(/<article[\s\S]*?<\/article>/);
  if (!articleMatch) continue;
  const text = articleMatch[0].replace(/<[^>]+>/g, "").trim();
  // Count Japanese chars
  const jaChars = (text.match(/[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]/g) || []).length;
  const totalChars = text.length;
  const jaRatio = totalChars > 0 ? jaChars / totalChars : 0;
  if (jaRatio < 0.15) {
    mixed.push({ slug, jaRatio: (jaRatio * 100).toFixed(1), totalChars });
  }
}
console.log("Articles with <15% Japanese chars: " + mixed.length);
mixed.sort((a,b) => a.jaRatio - b.jaRatio).forEach(m => console.log("  " + m.slug + ": " + m.jaRatio + "% JA, " + m.totalChars + " chars"));
