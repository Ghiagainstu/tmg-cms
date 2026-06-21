const fs = require("fs");
const path = require("path");

const dir = String.raw`C:\Users\fireh\WorkBuddy\20260326144402\tmg-website\ja\blog`;
const files = fs.readdirSync(dir).filter(f => f.endsWith(".html") && f !== "index.html");

const issues = [];
for (const file of files) {
  const c = fs.readFileSync(path.join(dir, file), "utf8");
  const slug = file.replace(".html", "");
  const fileIssues = [];
  
  // 1. Visual components
  const hasCallout = /<div class="callout callout--accent">/.test(c);
  const hasGrid = /<div class="feature-grid">/.test(c);
  const hasTable = /class="article-table">/.test(c);
  const hasBanner = /<div class="takeaway-banner">/.test(c);
  const count = [hasCallout, hasGrid, hasTable, hasBanner].filter(Boolean).length;
  const missing = [];
  if (!hasCallout) missing.push("callout");
  if (!hasGrid) missing.push("feature-grid");
  if (!hasTable) missing.push("article-table");
  if (!hasBanner) missing.push("takeaway-banner");
  if (missing.length > 0) fileIssues.push("missing: " + missing.join(", "));
  
  // 2. English remnants
  const engWords = ["Key Insight", "Market Signal", "Key Takeaway", "Key Data", "significantly", "massive", "uniquely", "Leveraging", "Published on", "Live URL", "Source: https"];
  for (const w of engWords) { if (c.includes(w)) fileIssues.push("ENG: " + w); }
  
  // 3. English footer labels
  if (c.includes(">About TMG<")) fileIssues.push("ENG FOOTER: About TMG");
  if (c.includes(">Quick Links<")) fileIssues.push("ENG FOOTER: Quick Links");
  if (/Legal</.test(c) && !/\u6cd5\u7684/.test(c)) fileIssues.push("ENG FOOTER: Legal");
  
  // 4. <hr> tags
  const hrCount = (c.match(/<hr\s*\/?>/g) || []).length;
  if (hrCount > 0) fileIssues.push("<hr>: " + hrCount);
  
  // 5. [table] placeholder
  if (c.includes("[table]")) fileIssues.push("[table] placeholder");
  
  // 6. YAML frontmatter
  if (c.includes("category: TMG-Blog")) fileIssues.push("YAML frontmatter");
  
  // 7. English H1
  const h1Match = c.match(/<h1>([A-Za-z][A-Za-z\s\d\-\—]+)<\/h1>/);
  if (h1Match && !/[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FFF]/.test(h1Match[1])) fileIssues.push("ENG H1: " + h1Match[1].substring(0, 60));
  
  // 8. Chinese chars in Japanese text
  const zhChars = c.match(/[\u7684\u4E86\u5427\u5462\u554A\u540D\u5B57]/);
  
  // 9. Encoding issues
  if (c.includes("\u652f\u6257")) fileIssues.push("ENCODE: 支扗");
  if (c.includes("\u52D7\u7523")) fileIssues.push("ENCODE: 狗産");
  
  if (fileIssues.length > 0) {
    issues.push({ slug, count, fileIssues });
  }
}

issues.sort((a, b) => a.count - b.count || a.slug.localeCompare(b.slug));
console.log("=== JA BLOG AUDIT ===");
console.log("Total articles: " + files.length);
console.log("With issues: " + issues.length);
console.log("Clean: " + (files.length - issues.length) + "\n");

for (const item of issues) {
  console.log(item.slug + " (" + item.count + "/4): " + item.fileIssues.join(" | "));
}
