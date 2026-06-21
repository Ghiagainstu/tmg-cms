const fs = require("fs");
const path = require("path");

const dir = String.raw`C:\Users\fireh\WorkBuddy\20260326144402\tmg-website\ja\blog`;
const files = fs.readdirSync(dir).filter(f => f.endsWith(".html") && f !== "index.html");

const issues = [];

for (const file of files) {
  const c = fs.readFileSync(path.join(dir, file), "utf8");
  const slug = file.replace(".html", "");
  const p = [];

  if (!/<div class="callout callout--accent">/.test(c)) p.push("缺callout");
  if (!/<div class="feature-grid">/.test(c)) p.push("缺feature-grid");
  if (!/class="article-table">/.test(c)) p.push("缺article-table");
  if (!/<div class="takeaway-banner">/.test(c)) p.push("缺takeaway-banner");
  if (/Key Takeaway/.test(c)) p.push("英文Key Takeaway");
  if (/Key Insight/.test(c)) p.push("英文Key Insight");
  if (/Market Signal/.test(c)) p.push("英文Market Signal");
  if (/Key Data/.test(c)) p.push("英文Key Data");
  if (c.includes(">About TMG<")) p.push("英文footer:About TMG");
  if (c.includes(">Quick Links<")) p.push("英文footer:Quick Links");
  const body = (c.match(/<article[\s\S]*?<\/article>/) || [""])[0];
  if (body.includes("significantly")) p.push("英文词:significantly");
  if (body.includes("Leveraging")) p.push("英文词:Leveraging");
  if (body.includes("massive")) p.push("英文词:massive");
  if (body.includes("uniquely")) p.push("英文词:uniquely");

  if (p.length > 0) issues.push({ slug, problems: p });
}

// Group by problem type
const groups = {};
for (const item of issues) {
  for (const prob of item.problems) {
    if (!groups[prob]) groups[prob] = [];
    groups[prob].push(item.slug);
  }
}

// Build output
let md = "# JA Blog 本地文件问题清单\n\n";
md += "**总文章**: " + files.length + " | **有问题**: " + issues.length + " | **干净**: " + (files.length - issues.length) + "\n\n";

md += "---\n\n";

// Problem summary table
md += "## 问题汇总\n\n";
md += "| 问题 | 篇数 |\n|------|------|\n";
const sorted = Object.entries(groups).sort((a,b) => b[1].length - a[1].length);
for (const [prob, slugs] of sorted) {
  md += "| " + prob + " | " + slugs.length + " |\n";
}

md += "\n---\n\n";

// Per-article list
md += "## 逐篇问题列表\n\n";
for (const item of issues) {
  md += "- **" + item.slug + "**: " + item.problems.join(", ") + "\n";
}

md += "\n---\n\n";

// WorkBuddy prompt
md += "## WorkBuddy 修复 Prompt\n\n";
md += "```\n";
md += "请逐篇修复以下 JA blog 文章的本地文件（路径: C:\\Users\\fireh\\WorkBuddy\\20260326144402\\tmg-website\\ja\\blog\\）。每篇文章的修复要求如下：\n\n";
md += "### 规则\n";
md += "1. 每次只修一篇，修完确认无误后再修下一篇\n";
md += "2. 所有文字必须是日文，不能有英文残留\n";
md += "3. 需要添加/修复的组件：\n";
md += "   - callout callout--accent: 标签用「なぜ重要か」，内容根据文章主题写\n";
md += "   - feature-grid: 3张卡片，根据文章内容提炼要点\n";
md += "   - article-table: 根据文章内容创建对比表\n";
md += "   - takeaway-banner: 标题用「重要ポイント」，内容根据文章总结\n";
md += "4. 「Key Takeaway」→「重要ポイント」\n";
md += "5. 「Key Insight」→「重要な洞察」\n";
md += "6. 「Market Signal」→「市場シグナル」\n";
md += "7. 「Key Data」→「主要データ」\n";
md += "8. 「About TMG」→「会社概要」\n";
md += "9. 「Quick Links」→「クイックリンク」\n";
md += "10. body中英文词替换: significantly→大幅に, massive→大規模な, uniquely→独自に, Leveraging→活用して\n\n";
md += "### 待修复文章及问题\n\n";

for (const item of issues) {
  md += item.slug + ": " + item.problems.join(", ") + "\n";
}

md += "\n修完后请在 D:\\Codex\\TMG\\workbuddy_fix_log.md 中记录每篇的修复内容。\n";
md += "```\n";

fs.writeFileSync("D:\\Codex\\TMG\\ja_blog_local_issues.md", md, "utf8");
console.log(md);
