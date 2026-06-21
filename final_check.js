const fs = require("fs");
const path = require("path");

const dir = String.raw`C:\Users\fireh\WorkBuddy\20260326144402\tmg-website\ja\blog`;
const files = fs.readdirSync(dir).filter(f => f.endsWith(".html") && f !== "index.html");

const clean = [];
const issues = [];

for (const file of files) {
  const c = fs.readFileSync(path.join(dir, file), "utf8");
  const slug = file.replace(".html", "");
  const url = "https://www.tuyuesouxin.cn/ja/blog/" + slug + "/";
  const p = [];

  // Components
  if (!/<div class="callout callout--accent">/.test(c)) p.push("缺callout");
  if (!/<div class="feature-grid">/.test(c)) p.push("缺feature-grid");
  if (!/class="article-table">/.test(c)) p.push("缺article-table");
  if (!/<div class="takeaway-banner">/.test(c)) p.push("缺takeaway-banner");

  // English labels
  if (/Key Takeaway/.test(c)) p.push("EN:Key Takeaway");
  if (/Key Insight/.test(c)) p.push("EN:Key Insight");
  if (/Market Signal/.test(c)) p.push("EN:Market Signal");
  if (/Key Data/.test(c)) p.push("EN:Key Data");

  // English footer
  if (c.includes(">About TMG<")) p.push("EN:About TMG");
  if (c.includes(">Quick Links<")) p.push("EN:Quick Links");
  if (/Legal</.test(c) && !/\u6cd5\u7684/.test(c.substring(c.indexOf("Legal") - 50, c.indexOf("Legal") + 50))) p.push("EN:Legal");

  // English body words
  const body = (c.match(/<article[\s\S]*?<\/article>/) || [""])[0];
  const engWords = ["significantly", "massive", "uniquely", "Leveraging"];
  for (const w of engWords) { if (body.includes(w)) { p.push("EN:" + w); break; } }

  // <hr>
  const hrCount = (c.match(/<hr\s*\/?>/g) || []).length;
  if (hrCount > 0) p.push("<hr>:" + hrCount);

  // [table]
  if (c.includes("[table]")) p.push("[table]");

  // YAML
  if (c.includes("category: TMG-Blog")) p.push("YAML");

  // Encoding
  if (c.includes("\u652f\u6257")) p.push("编码:支扗");

  if (p.length > 0) {
    issues.push({ slug, url, problems: p });
  } else {
    clean.push(slug);
  }
}

console.log("=== JA BLOG 最终核对 ===");
console.log("总文章: " + files.length);
console.log("完全干净: " + clean.length);
console.log("有问题: " + issues.length);

if (issues.length > 0) {
  console.log("\n=== 仍有问题的文章 ===");
  for (const item of issues) {
    console.log(item.url);
    console.log("  -> " + item.problems.join(" | "));
  }
}
