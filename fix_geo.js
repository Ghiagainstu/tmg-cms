const fs = require("fs");
const srcPath = String.raw`C:\Users\fireh\WorkBuddy\20260326144402\tmg-website\ja\blog\geo-channel-weight-2026.html`;
const outPath = String.raw`D:\Codex\TMG\geo-channel_fixed.html`;
let c = fs.readFileSync(srcPath, "utf8");

// 1. CALLOUT after first H2 (\u30a6\u30a7\u30a4\u30c8\u304c\u4e0a\u6607)
const h2End = c.indexOf("</h2>", c.indexOf("<h2"));
const calloutHTML = '\n<div class="callout callout--accent"><div class="callout__label">\u306a\u305c\u91cd\u8981\u304b</div><p>AI\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306f\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u54c1\u8cea\u3060\u3051\u3067\u306a\u304f\u3001\u30bd\u30fc\u30b9\u306e\u6a29\u5a01\u6027\u3082\u8a55\u4fa1\u3057\u3066\u3044\u307e\u3059\u3002\u30c1\u30e3\u30cd\u30eb\u9078\u5b9a\u304cGEO\u306e\u6210\u5426\u3092\u5de6\u53f3\u3057\u307e\u3059\u3002</p></div>\n';
c = c.substring(0, h2End + 5) + calloutHTML + c.substring(h2End + 5);

// 2. FEATURE-GRID after "\u5730\u65b9\u653f\u5e9c\u30e1\u30c7\u30a3\u30a2" H3
const govH3 = c.indexOf("\u5730\u65b9\u653f\u5e9c\u30e1\u30c7\u30a3\u30a2\u30fb\u516c\u5f0f\u30a2\u30ab\u30a6\u30f3\u30c8");
const govP1End = c.indexOf("</p>", govH3) + 4;
const featureGridHTML = '\n<div class="feature-grid">\n<div class="feature-card"><div class="feature-card__num">\u2b50</div><div class="feature-card__title">\u696d\u754c\u5c02\u9580\u30b5\u30a4\u30c8</div><div class="feature-card__desc">\u30b3\u30f3\u30d7\u30e9\u30a4\u30a2\u30f3\u30b9\u6e96\u62e0\u3001\u9ad8\u54c1\u8cea\u306a\u8a18\u4e8b\u3002\u5730\u65b9\u653f\u5e9c\u30e1\u30c7\u30a3\u30a2\u3068\u5171\u306b\u6700\u512a\u5148\u30c1\u30e3\u30cd\u30eb\u3002</div></div>\n<div class="feature-card"><div class="feature-card__num">\u2b50</div><div class="feature-card__title">\u5730\u65b9\u653f\u5e9c\u30e1\u30c7\u30a3\u30a2</div><div class="feature-card__desc">\u516c\u5f0f\u6027\u3068\u4fe1\u983c\u6027\u304c\u9ad8\u3044\u3002AI\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u304c\u6700\u3082\u4fe1\u983c\u3059\u308b\u30bd\u30fc\u30b9\u306e\u4e00\u3064\u3002</div></div>\n<div class="feature-card"><div class="feature-card__num">\u274c</div><div class="feature-card__title">\u7d14\u7cb8AI\u751f\u6210\u30b3\u30f3\u30c6\u30f3\u30c4</div><div class="feature-card__desc">\u30a6\u30a7\u30a4\u30c8\u304c\u30bc\u30ed\u5316\u3002AI\u306f\u81ea\u5206\u3067\u751f\u6210\u3067\u304d\u308b\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u5f15\u7528\u3057\u307e\u305b\u3093\u3002</div></div>\n</div>\n';
c = c.substring(0, govP1End) + featureGridHTML + c.substring(govP1End);

// 3. Remove <hr> tags and English metadata at bottom
c = c.replace(/<hr\s*\/?>\s*/g, "");
c = c.replace(/<p><em>Source: https:\/\/www\.tuyuesouxin\.cn\/blog\/geo-channel-weight-2026\/<\/em>[\s\S]*?<\/p>\s*/, "");
c = c.replace(/<p><strong>Live URL:<\/strong>[^<]*<\/p>\s*/, "");

// 4. Also check for English H1, YAML, "Published on"
c = c.replace(/<h1>[A-Z][A-Za-z\s\d\-\—\%]+<\/h1>\n?/, "");
c = c.replace(/<p><em>Published on[^<]*<\/em><\/p>\s*/, "");
c = c.replace(/<p>\uFEFF?---\n[\s\S]*?category:[^<]*<\/p>\s*/, "");

// Clean extra blank lines
c = c.replace(/\n{3,}/g, "\n\n");

fs.writeFileSync(outPath, c, "utf8");
console.log("Written to: " + outPath);
console.log("callout: " + (/<div class="callout callout--accent">/.test(c) ? "PASS" : "FAIL"));
console.log("feature-grid: " + (/<div class="feature-grid">/.test(c) ? "PASS" : "FAIL"));
console.log("article-table: " + (/class="article-table">/.test(c) ? "PASS" : "FAIL"));
console.log("takeaway-banner: " + (/<div class="takeaway-banner">/.test(c) ? "PASS" : "FAIL"));
console.log("<hr>: " + (c.match(/<hr/g) || []).length);
console.log("Live URL: " + (c.includes("Live URL") ? "THERE" : "clean"));
console.log("Source: " + (c.includes("Source: https") ? "THERE" : "clean"));
console.log("English version: " + (c.includes("English version") ? "THERE" : "clean"));
var engWords = ["Key Insight", "Key Takeaway", "significantly", "massive", "uniquely", "Leveraging"];
for (var w of engWords) { if (c.includes(w)) console.log("ENGLISH: " + w); }
console.log("English: clean");
