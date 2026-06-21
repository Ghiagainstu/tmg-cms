const fs = require("fs");
const path = require("path");
const dir = "C:\\Users\\fireh\\WorkBuddy\\20260326144402\\tmg-website\\ja\\blog";
const files = fs.readdirSync(dir).filter(f => f.endsWith(".html") && f !== "index.html");

for (const file of files) {
  const c = fs.readFileSync(path.join(dir, file), "utf8");
  const slug = file.replace(".html", "");
  // Check inside article body for read time
  const rt = c.match(/article__read-time[^>]*>(.*?)</);
  const meta = c.match(/article__meta([\s\S]{0,500}?)<\/div>/);
  if (meta) {
    const m = meta[1];
    if (m.includes("分で読める") || m.includes("読了まで")) {
      const r = m.match(/(\d+\s*分で読める|読了まで約\d+分)/);
      if (r) {
        // just count formats
      }
    }
  }
}
// just check index page read time formats
const indexC = fs.readFileSync(path.join(dir, "index.html"), "utf8");
const idxTimes = [...indexC.matchAll(/post-card__read-time">(.*?)<\/span>/g)].map(m => m[1].trim());
const unique = [...new Set(idxTimes)];
console.log("Unique read time formats on index: " + unique.length);
unique.forEach(u => console.log("  " + u));
