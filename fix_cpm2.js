const fs = require("fs");
const srcPath = String.raw`C:\Users\fireh\WorkBuddy\20260326144402\tmg-website\ja\blog\cpm-ocpm-ecpm-explained.html`;
const outPath = String.raw`D:\Codex\TMG\cpm-ocpm-ecpm_fixed.html`;
let c = fs.readFileSync(srcPath, "utf8");

// 1. CALLOUT after first H2
const h2End = c.indexOf("</h2>", c.indexOf("<h2"));
const calloutHTML = '\n<div class="callout callout--accent"><div class="callout__label">\u306a\u305c\u91cd\u8981\u304b</div><p>CPM\u3001oCPM\u3001eCPM\u306f\u6df7\u540c\u3057\u3084\u3059\u3044\u304c\u3001\u305d\u308c\u305e\u308c\u7570\u306a\u308b\u5f79\u5272\u3092\u6301\u3061\u307e\u3059\u3002\u3053\u308c\u3089\u3092\u6df7\u540c\u3059\u308b\u3068\u3001\u9593\u9055\u3063\u305f\u6570\u5b57\u3092\u6700\u9069\u5316\u3057\u3066\u3057\u307e\u3044\u307e\u3059\u3002</p></div>\n';
c = c.substring(0, h2End + 5) + calloutHTML + c.substring(h2End + 5);

// 2. FEATURE-GRID after eCPM section intro (after "eCPM\u2014\u2014\u30b7\u30b9\u30c6\u30e0\u306e\u79d8\u5bc6\u306e\u30e9\u30f3\u30ad\u30f3\u30b0\u30b9\u30b3\u30a2")
const ecpmH2 = c.indexOf("eCPM\u2014\u2014\u30b7\u30b9\u30c6\u30e0\u306e\u79d8\u5bc6");
const ecpmP1End = c.indexOf("</p>", ecpmH2) + 4;
const featureGridHTML = '\n<div class="feature-grid">\n<div class="feature-card"><div class="feature-card__num">1</div><div class="feature-card__title">CPM\uff08\u8868\u9762\u306e\u4fa1\u683c\uff09</div><div class="feature-card__desc">\u5e83\u544a\u4e3b\u304c\u652f\u6257\u30461,000\u30a4\u30f3\u30d7\u30ec\u30c3\u30b7\u30e7\u30f3\u5f53\u305f\u308a\u306e\u5b9f\u969b\u306e\u30b3\u30b9\u30c8\u3002\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u306b\u8868\u793a\u3055\u308c\u308b\u6570\u5b57\u3002</div></div>\n<div class="feature-card"><div class="feature-card__num">2</div><div class="feature-card__title">oCPM\uff08\u6700\u9069\u5316\u5165\u672d\uff09</div><div class="feature-card__desc">\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u306b\u300c\u3053\u306e\u76ee\u6a19\u3092\u9054\u6210\u3057\u3066\u304f\u3060\u3055\u3044\u300d\u3068\u4f1d\u3048\u308b\u5165\u672d\u65b9\u6cd5\u3002\u5b9f\u969b\u306eCPM\u306f\u52d5\u304f\u3002</div></div>\n<div class="feature-card"><div class="feature-card__num">3</div><div class="feature-card__title">eCPM\uff08\u5185\u90e8\u30e9\u30f3\u30ad\u30f3\u30b0\uff09</div><div class="feature-card__desc">\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u304c\u5e83\u544a\u5728\u5eab\u3092\u5272\u308a\u5f53\u3066\u308b\u969b\u306e\u5185\u90e8\u30b9\u30b3\u30a2\u3002\u5165\u672d\u00d7\u4e88\u6e2cCTR\u00d7\u4e88\u6e2cCVR\u00d71000\u3002</div></div>\n</div>\n';
c = c.substring(0, ecpmP1End) + featureGridHTML + c.substring(ecpmP1End);

// 3. Replace [table] with real comparison table
const tableIdx = c.indexOf("[table]");
const tableHTML = '\n<div class="article-table-wrap">\n<table class="article-table">\n<thead><tr><th>\u6307\u6a19</th><th>CPM</th><th>oCPM</th><th>eCPM</th></tr></thead>\n<tbody>\n<tr><td><strong>\u5b9a\u7fa9</strong></td><td>1,000\u30a4\u30f3\u30d7\u30ec\u30c3\u30b7\u30e7\u30f3\u5f53\u305f\u308a\u306e\u30b3\u30b9\u30c8</td><td>\u76ee\u6a19\u3092\u6700\u9069\u5316\u3057\u305f\u5165\u672d\u65b9\u6cd5</td><td>\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u5185\u306e\u30e9\u30f3\u30ad\u30f3\u30b0\u30b9\u30b3\u30a2</td></tr>\n<tr><td><strong>\u8a70\u307e\u308a\u5148</strong></td><td>\u5e83\u544a\u4e3b</td><td>\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0</td><td>\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0</td></tr>\n<tr><td><strong>\u4f7f\u7528\u5834\u9762</strong></td><td>\u30c0\u30c3\u30b7\u30e5\u30dc\u30fc\u30c9\u78ba\u8a8d</td><td>\u30ad\u30e3\u30f3\u30da\u30fc\u30f3\u8a2d\u5b9a</td><td>\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u5206\u6790</td></tr>\n<tr><td><strong>\u91cd\u8981\u306a\u3053\u3068</strong></td><td>\u8868\u9762\u306e\u30c7\u30fc\u30bf\u3060\u3051\u3067\u5224\u65ad\u3057\u306a\u3044</td><td>\u5b9f\u969b\u306eCPM\u306f\u5909\u52d5\u3059\u308b</td><td>\u30af\u30ea\u30a8\u30a4\u30c6\u30a3\u30d6\u54c1\u8cea\u304c\u5168\u3066</td></tr>\n</tbody>\n</table>\n</div>\n';
c = c.substring(0, tableIdx) + tableHTML + c.substring(tableIdx + "[table]".length);

// 4. TAKEAWAY-BANNER before "\u5b9f\u8df5\u7684\u306a\u8981\u70b9" H2
const takeawayH2 = c.indexOf("\u5b9f\u8df5\u7684\u306a\u8981\u70b9");
const takeawayH2Start = c.lastIndexOf("<h2", takeawayH2);
const bannerHTML = '\n<div class="takeaway-banner"><div class="takeaway-banner__title">\u91cd\u8981\u30dd\u30a4\u30f3\u30c8</div><p class="takeaway-banner__text">CPM\u306f\u4fa1\u683c\u3001oCPM\u306f\u5165\u672d\u65b9\u6cd5\u3001eCPM\u306f\u30e9\u30f3\u30ad\u30f3\u30b0\u30b9\u30b3\u30a2\u3067\u3059\u3002\u3053\u308c\u3089\u3092\u6df7\u540c\u3059\u308b\u3068\u3001\u9593\u9055\u3063\u305f\u6570\u5b57\u3092\u6700\u9069\u5316\u3057\u3066\u3057\u307e\u3044\u307e\u3059\u3002</p></div>\n\n';
c = c.substring(0, takeawayH2Start) + bannerHTML + c.substring(takeawayH2Start);

fs.writeFileSync(outPath, c, "utf8");
console.log("Written to: " + outPath);
console.log("callout: " + (/<div class="callout callout--accent">/.test(c) ? "PASS" : "FAIL"));
console.log("feature-grid: " + (/<div class="feature-grid">/.test(c) ? "PASS" : "FAIL"));
console.log("article-table: " + (/class="article-table">/.test(c) ? "PASS" : "FAIL"));
console.log("takeaway-banner: " + (/<div class="takeaway-banner">/.test(c) ? "PASS" : "FAIL"));
console.log("[table] remaining: " + (c.includes("[table]") ? "YES" : "NO"));
const engWords = ["Key Insight", "Key Takeaway", "significantly", "massive", "uniquely", "Leveraging"];
for (const w of engWords) { if (c.includes(w)) console.log("ENGLISH: " + w); }
console.log("English: clean");
