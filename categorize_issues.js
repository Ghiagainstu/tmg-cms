const fs = require("fs");
const path = require("path");

const dir = String.raw`C:\Users\fireh\WorkBuddy\20260326144402\tmg-website\ja\blog`;
const files = fs.readdirSync(dir).filter(f => f.endsWith(".html") && f !== "index.html");

const categories = {
  "eng_footer": [],       // 英文 footer (About TMG / Quick Links / Legal)
  "eng_key_takeaway": [],  // banner 标题英文 "Key Takeaway"
  "eng_key_insight": [],   // callout 标签英文 "Key Insight"
  "eng_market_signal": [], // callout 标签英文 "Market Signal"
  "eng_key_data": [],      // TOC 英文 "Key Data"
  "eng_body_words": [],    // body 中 significantly / Leveraging / massive / uniquely
  "missing_grid": [],      // 缺 feature-grid
  "missing_table": [],     // 缺 article-table
  "missing_banner": [],    // 缺 takeaway-banner
  "missing_callout": [],   // 缺 callout
};

for (const file of files) {
  const c = fs.readFileSync(path.join(dir, file), "utf8");
  const slug = file.replace(".html", "");
  const url = "https://www.tuyuesouxin.cn/ja/blog/" + slug + "/";
  
  if (c.includes(">About TMG<") || c.includes(">Quick Links<") || /Legal</.test(c)) categories.eng_footer.push(url);
  if (c.match(/takeaway-banner__title">Key Takeaway/)) categories.eng_key_takeaway.push(url);
  if (c.match(/callout__label">Key Insight/)) categories.eng_key_insight.push(url);
  if (c.match(/callout__label">Market Signal/)) categories.eng_market_signal.push(url);
  if (c.match(/toc__link">Key Data/)) categories.eng_key_data.push(url);
  
  const body = (c.match(/<article[\s\S]*?<\/article>/) || [""])[0];
  const engWords = ["significantly", "massive", "uniquely", "Leveraging"];
  for (const w of engWords) { if (body.includes(w)) { categories.eng_body_words.push(url + " (" + w + ")"); break; } }
  
  if (!/<div class="callout callout--accent">/.test(c)) categories.missing_callout.push(url);
  if (!/<div class="feature-grid">/.test(c)) categories.missing_grid.push(url);
  if (!/class="article-table">/.test(c)) categories.missing_table.push(url);
  if (!/<div class="takeaway-banner">/.test(c)) categories.missing_banner.push(url);
}

const labels = {
  eng_footer: "🔤 英文 Footer（About TMG / Quick Links / Legal）",
  eng_key_takeaway: "🔤 Banner 标题英文 Key Takeaway",
  eng_key_insight: "🔤 Callout 标签英文 Key Insight",
  eng_market_signal: "🔤 Callout 标签英文 Market Signal",
  eng_key_data: "🔤 TOC 英文 Key Data",
  eng_body_words: "🔤 Body 中残留英文词",
  missing_callout: "❌ 缺少 callout 组件",
  missing_grid: "❌ 缺少 feature-grid 组件",
  missing_table: "❌ 缺少 article-table 组件",
  missing_banner: "❌ 缺少 takeaway-banner 组件",
};

let output = "# JA Blog 问题分类\n\n";
for (const [key, urls] of Object.entries(categories)) {
  if (urls.length === 0) continue;
  output += "## " + labels[key] + "（" + urls.length + "篇）\n\n";
  for (const url of urls) { output += "- " + url + "\n"; }
  output += "\n";
}

fs.writeFileSync("D:\\Codex\\TMG\\ja_blog_issues_report.md", output, "utf8");
console.log(output);
