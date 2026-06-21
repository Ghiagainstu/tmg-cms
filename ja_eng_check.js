const fs = require("fs");
const path = require("path");
const dir = "C:\\Users\\fireh\\WorkBuddy\\20260326144402\\tmg-website\\ja\\blog";
const files = fs.readdirSync(dir).filter(f => f.endsWith(".html") && f !== "index.html");
const results = [];
for (const file of files) {
  const c = fs.readFileSync(path.join(dir, file), "utf8");
  const slug = file.replace(".html", "");
  const toc = [...c.matchAll(/class="toc__link">(.*?)<\/a>/g)].map(m => m[1].trim()).filter(t => /^[A-Za-z\s\d\-:]+$/.test(t) && t.length > 2);
  const cl = c.match(/<div class="callout__label">(.*?)<\/div>/);
  const clVal = cl ? cl[1].trim() : null;
  const engCl = clVal && /^[A-Za-z\s]+$/.test(clVal) && !clVal.includes("\u91cd\u8981");
  const bt = c.match(/takeaway-banner__title">(.*?)<\/div>/);
  const btVal = bt ? bt[1].trim() : null;
  const engBt = btVal && /Key Takeaway/i.test(btVal);
  if (toc.length > 0 || engCl || engBt) {
    results.push({ s: slug, t: toc.length > 0 ? toc : null, c: engCl ? clVal : null, b: engBt ? btVal : null });
  }
}
console.log("Total: " + results.length);
results.forEach(r => console.log(JSON.stringify(r)));
