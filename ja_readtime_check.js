const fs = require("fs");
const path = require("path");
const dir = "C:\\Users\\fireh\\WorkBuddy\\20260326144402\\tmg-website\\ja\\blog";
const files = fs.readdirSync(dir).filter(f => f.endsWith(".html") && f !== "index.html");

const formats = {};
for (const file of files) {
  const c = fs.readFileSync(path.join(dir, file), "utf8");
  const slug = file.replace(".html", "");
  const rt = c.match(/post-card__read-time">(.*?)<\/span>/) || c.match(/article-read-time[^>]*>(.*?)</);
  if (rt) {
    const t = rt[1].trim();
    if (!formats[t]) formats[t] = [];
    formats[t].push(slug);
  }
}
for (const [k, v] of Object.entries(formats).sort()) {
  console.log(k + " (" + v.length + ")");
}
