const fs = require("fs");
const path = require("path");

const dir = String.raw`C:\Users\fireh\WorkBuddy\20260326144402\tmg-website\ja\blog`;
const files = fs.readdirSync(dir).filter(f => f.endsWith(".html") && f !== "index.html");

// Check each issue type the report claims to have fixed
const checks = {
  "Footer:About TMG": 0,
  "Footer:Quick Links": 0,
  "Footer:Legal": 0,
  "Banner:Key Takeaway": 0,
  "Callout:Key Insight": 0,
  "Callout:Market Signal": 0,
  "TOC:Key Data": 0,
  "EN:significantly": 0,
  "EN:Leveraging": 0,
  "EN:uniquely": 0,
  "EN:massive": 0,
  "缺feature-grid": 0,
  "缺article-table": 0,
  "缺takeaway-banner": 0,
  "缺callout": 0,
};

const problemFiles = {};

for (const file of files) {
  const c = fs.readFileSync(path.join(dir, file), "utf8");
  const slug = file.replace(".html", "");
  const probs = [];

  if (c.includes(">About TMG<")) { checks["Footer:About TMG"]++; probs.push("About TMG"); }
  if (c.includes(">Quick Links<")) { checks["Footer:Quick Links"]++; probs.push("Quick Links"); }
  // Legal check - look for standalone "Legal" in footer area
  const footerIdx = c.indexOf("footer");
  if (footerIdx > 0) {
    const footer = c.substring(footerIdx);
    if (/Legal</.test(footer) && !/\u6cd5\u7684/.test(footer)) { checks["Footer:Legal"]++; probs.push("Legal"); }
  }
  if (/takeaway-banner__title">Key Takeaway/.test(c)) { checks["Banner:Key Takeaway"]++; probs.push("Key Takeaway"); }
  if (/callout__label">Key Insight/.test(c)) { checks["Callout:Key Insight"]++; probs.push("Key Insight"); }
  if (/callout__label">Market Signal/.test(c)) { checks["Callout:Market Signal"]++; probs.push("Market Signal"); }
  if (/Key Data/.test(c)) { checks["TOC:Key Data"]++; probs.push("Key Data"); }
  
  const body = (c.match(/<article[\s\S]*?<\/article>/) || [""])[0];
  if (body.includes("significantly")) { checks["EN:significantly"]++; probs.push("significantly"); }
  if (body.includes("Leveraging")) { checks["EN:Leveraging"]++; probs.push("Leveraging"); }
  if (body.includes("uniquely")) { checks["EN:uniquely"]++; probs.push("uniquely"); }
  if (body.includes("massive")) { checks["EN:massive"]++; probs.push("massive"); }
  
  if (!/<div class="callout callout--accent">/.test(c)) { checks["缺callout"]++; probs.push("缺callout"); }
  if (!/<div class="feature-grid">/.test(c)) { checks["缺feature-grid"]++; probs.push("缺feature-grid"); }
  if (!/class="article-table">/.test(c)) { checks["缺article-table"]++; probs.push("缺article-table"); }
  if (!/<div class="takeaway-banner">/.test(c)) { checks["缺takeaway-banner"]++; probs.push("缺takeaway-banner"); }

  if (probs.length > 0) problemFiles[slug] = probs;
}

console.log("=== 报告声称修复后实际核对 ===\n");
console.log("| 问题 | 报告声称 | 实际残留 | 状态 |");
console.log("|------|---------|---------|------|");
const reportClaims = {
  "Footer:About TMG": 0, "Footer:Quick Links": 0, "Footer:Legal": 0,
  "Banner:Key Takeaway": 0, "Callout:Key Insight": 0, "Callout:Market Signal": 0,
  "TOC:Key Data": 0, "EN:significantly": 0, "EN:Leveraging": 0,
  "EN:uniquely": 0, "EN:massive": 0
};
for (const [k, v] of Object.entries(checks)) {
  const claimed = reportClaims[k] !== undefined ? "0" : "未提及";
  const status = v === 0 ? "✅" : "❌";
  console.log("| " + k + " | " + claimed + " | " + v + " | " + status + " |");
}

console.log("\n=== 仍有问题的文章 (" + Object.keys(problemFiles).length + " 篇) ===\n");
const sorted = Object.entries(problemFiles).sort((a,b) => a[0].localeCompare(b[0]));
for (const [slug, probs] of sorted) {
  console.log(slug + ": " + probs.join(", "));
}
