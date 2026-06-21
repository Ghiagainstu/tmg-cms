const fs = require("fs");
const srcPath = String.raw`C:\Users\fireh\WorkBuddy\20260326144402\tmg-website\ja\blog\cpm-is-rising-bad.html`;
const outPath = String.raw`D:\Codex\TMG\cpm-is-rising-bad_fixed.html`;
let c = fs.readFileSync(srcPath, "utf8");

// 1. CALLOUT after first H2
const h2End = c.indexOf("</h2>", c.indexOf("<h2"));
const calloutHTML = '\n<div class="callout callout--accent"><div class="callout__label">\u306a\u305c\u91cd\u8981\u304b</div><p>CPM\u306e\u4e0a\u6607\u306f\u5fc5\u305a\u3057\u3082\u60aa\u3044\u51e6\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002CPA\u3001CTR\u3001CVR\u3068\u306e\u95a2\u4fc2\u3092\u5168\u4f53\u3067\u898b\u308b\u3053\u3068\u304c\u5927\u4e8b\u3067\u3059\u3002</p></div>\n';
c = c.substring(0, h2End + 5) + calloutHTML + c.substring(h2End + 5);

// 2. FEATURE-GRID after "\u30aa\u30fc\u30c7\u30a3\u30a8\u30f3\u30b9\u30d7\u30fc\u30eb\u304c\u5c0f\u3055\u3059\u304e\u308b" H3
const poolH3 = c.indexOf("\u30aa\u30fc\u30c7\u30a3\u30a8\u30f3\u30b9\u30d7\u30fc\u30eb\u304c\u5c0f\u3055\u3059\u304e\u308b");
const poolP1End = c.indexOf("</p>", poolH3) + 4;
const featureGridHTML = '\n<div class="feature-grid">\n<div class="feature-card"><div class="feature-card__num">1</div><div class="feature-card__title">CPM\u4e0a\u6607 + CTR\u4e0a\u6607</div><div class="feature-card__desc">\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u304c\u9ad8\u610f\u6b3a\u30e6\u30fc\u30b6\u30fc\u3092\u767a\u898b\u3057\u3066\u3044\u308b\u8a3c\u62e0\u3002\u826f\u3044\u51e6\u3067\u3059\u3002</div></div>\n<div class="feature-card"><div class="feature-card__num">2</div><div class="feature-card__title">CPM\u4e0a\u6607 + CTR\u6a2a\u6253\u3044</div><div class="feature-card__desc">\u30bf\u30fc\u30b2\u30c6\u30a3\u30f3\u30b0\u304c\u72ed\u3059\u304e\u308b\u304b\u3001\u30af\u30ea\u30a8\u30a4\u30c6\u30a3\u30d6\u304c\u5f31\u3044\u3002\u8b66\u544a\u30b7\u30b0\u30ca\u30eb\u3002</div></div>\n<div class="feature-card"><div class="feature-card__num">3</div><div class="feature-card__title">CPM\u4e0a\u6607 + CTR\u4e0b\u964d</div><div class="feature-card__desc">\u5371\u967a\u30b7\u30b0\u30ca\u30eb\u3002\u30af\u30ea\u30a8\u30a4\u30c6\u30a3\u30d6\u306e\u518d\u69cb\u7bc9\u3068\u30bf\u30fc\u30b2\u30c6\u30a3\u30f3\u30b0\u306e\u898b\u76f4\u3057\u304c\u5fc5\u8981\u3002</div></div>\n</div>\n';
c = c.substring(0, poolP1End) + featureGridHTML + c.substring(poolP1End);

// 3. Replace [table] with real article-table
const tablePlaceholder = c.indexOf("[table]");
const tableHTML = '\n<div class="article-table-wrap">\n<table class="article-table">\n<thead><tr><th></th><th>CTR\u4e0a\u6607</th><th>CTR\u6a2a\u6253\u3044</th><th>CTR\u4e0b\u964d</th></tr></thead>\n<tbody>\n<tr><td><strong>CPM\u4e0a\u6607</strong></td><td>\u2705 \u826f\u597d\u2014\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u5b66\u7fd2\u4e2d</td><td>\u26a0\ufe0f \u8b66\u544a\u2014\u30bf\u30fc\u30b2\u30c6\u30a3\u30f3\u30b0\u898b\u76f4\u3057</td><td>\u274c \u5371\u967a\u2014\u30af\u30ea\u30a8\u30a4\u30c6\u30a3\u30d6\u518d\u69cb\u7bc9</td></tr>\n<tr><td><strong>CPM\u6a2a\u6253\u3044</strong></td><td>\u2705 \u5b89\u5b9a</td><td>\u2705 \u5b89\u5b9a</td><td>\u26a0\ufe0f \u30b3\u30f3\u30c6\u30f3\u30c4\u898b\u76f4\u3057</td></tr>\n<tr><td><strong>CPM\u4e0b\u964d</strong></td><td>\u2705 \u6a5f\u4f1a\u2014\u4e88\u7b97\u62e1\u5927</td><td>\u2705 \u826f\u597d</td><td>\u26a0\ufe0f \u9700\u8981\u30c7\u30fc\u30bf\u5206\u6790</td></tr>\n</tbody>\n</table>\n</div>\n';
c = c.substring(0, tablePlaceholder) + tableHTML + c.substring(tablePlaceholder + "[table]".length);

// 4. TAKEAWAY-BANNER before "\u8981\u70b9" H2
const takeawayH2 = c.indexOf("\u8981\u70b9");
const takeawayH2Start = c.lastIndexOf("<h2", takeawayH2);
const bannerHTML = '\n<div class="takeaway-banner"><div class="takeaway-banner__title">\u91cd\u8981\u30dd\u30a4\u30f3\u30c8</div><p class="takeaway-banner__text">CPM\u306f\u5358\u4e00\u306e\u30c7\u30fc\u30bf\u30dd\u30a4\u30f3\u30c8\u3067\u3059\u3002CPM + CTR + CVR \u2192 CPA\u306e\u30c1\u30a7\u30fc\u30f3\u5168\u4f53\u3092\u898b\u3066\u3001\u6700\u521d\u306e\u30ea\u30f3\u30af\u3060\u3051\u3092\u898b\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002</p></div>\n\n';
c = c.substring(0, takeawayH2Start) + bannerHTML + c.substring(takeawayH2Start);

fs.writeFileSync(outPath, c, "utf8");
console.log("Written to: " + outPath);
console.log("callout: " + (/<div class="callout callout--accent">/.test(c) ? "PASS" : "FAIL"));
console.log("feature-grid: " + (/<div class="feature-grid">/.test(c) ? "PASS" : "FAIL"));
console.log("article-table: " + (/class="article-table">/.test(c) ? "PASS" : "FAIL"));
console.log("takeaway-banner: " + (/<div class="takeaway-banner">/.test(c) ? "PASS" : "FAIL"));
console.log("[table] remaining: " + (c.includes("[table]") ? "YES" : "NO"));

// English check
const engWords = ["Key Insight", "Key Takeaway", "significantly", "massive", "uniquely", "Leveraging"];
for (const w of engWords) { if (c.includes(w)) console.log("ENGLISH: " + w); }
console.log("English: clean");
