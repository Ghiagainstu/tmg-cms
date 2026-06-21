const fs = require("fs");
const path = require("path");
const dir = "C:\\Users\\fireh\\WorkBuddy\\20260326144402\\tmg-website\\ja\\blog";
const files = fs.readdirSync(dir).filter(f => f.endsWith(".html") && f !== "index.html");

const issues = [];
for (const file of files) {
  const c = fs.readFileSync(path.join(dir, file), "utf8");
  const slug = file.replace(".html", "");
  
  // Visual components
  const hasCallout = /<div class="callout callout--accent"/.test(c);
  const hasGrid = /<div class="feature-grid"/.test(c);
  const hasTable = /<div class="article-table"/.test(c);
  const hasBanner = /<div class="takeaway-banner"/.test(c);
  const count = [hasCallout, hasGrid, hasTable, hasBanner].filter(Boolean).length;
  
  // English content issues
  const toc = [...c.matchAll(/class="toc__link">(.*?)<\/a>/g)].map(m => m[1].trim()).filter(t => /^[A-Za-z\s\d\-:]+$/.test(t) && t.length > 2);
  const cl = c.match(/<div class="callout__label">(.*?)<\/div>/);
  const clVal = cl ? cl[1].trim() : null;
  const engCl = clVal && /^[A-Za-z\s]+$/.test(clVal) && !clVal.includes("\u91cd\u8981");
  const bt = c.match(/takeaway-banner__title">(.*?)<\/div>/);
  const btVal = bt ? bt[1].trim() : null;
  const engBt = btVal && /Key Takeaway/i.test(btVal);
  
  const missing = [];
  if (!hasCallout) missing.push("callout");
  if (!hasGrid) missing.push("feature-grid");
  if (!hasTable) missing.push("article-table");
  if (!hasBanner) missing.push("takeaway-banner");
  
  const engIssues = [];
  if (toc.length > 0) engIssues.push("TOC: " + toc.join(", "));
  if (engCl) engIssues.push("callout-label: " + clVal);
  if (engBt) engIssues.push("banner-title: " + btVal);
  
  if (missing.length > 0 || engIssues.length > 0) {
    issues.push({ slug, count, missing, engIssues });
  }
}

// Sort by count (ascending) then slug
issues.sort((a, b) => a.count - b.count || a.slug.localeCompare(b.slug));

console.log("=== JA Blog Audit: " + issues.length + " articles with issues ===\n");

const byCount = {};
for (const i of issues) {
  const key = i.count + "/4";
  if (!byCount[key]) byCount[key] = [];
  byCount[key].push(i);
}

for (const [key, items] of Object.entries(byCount).sort()) {
  console.log("--- " + key + " components (" + items.length + " articles) ---");
  for (const item of items) {
    let line = item.slug + " | missing: " + item.missing.join(", ");
    if (item.engIssues.length > 0) line += " | ENG: " + item.engIssues.join("; ");
    console.log(line);
  }
  console.log("");
}
