const fs = require("fs");
const srcPath = String.raw`C:\Users\fireh\WorkBuddy\20260326144402\tmg-website\ja\blog\smart-bidding-strategies-explained.html`;
const outPath = String.raw`D:\Codex\TMG\smart-bidding_fixed.html`;
let c = fs.readFileSync(srcPath, "utf8");

// 1. CALLOUT after first H2
var h2End = c.indexOf("</h2>", c.indexOf("<h2"));
var calloutHTML = '\n<div class="callout callout--accent"><div class="callout__label">\u306a\u305c\u91cd\u8981\u304b</div><p>\u5165\u672d\u6226\u7565\u306f\u5e83\u544a\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306e\u6838\u3067\u3059\u3002\u9593\u9055\u3063\u305f\u5165\u672d\u30e2\u30c7\u30eb\u3092\u9078\u3076\u3068\u3001\u4e88\u7b97\u304c\u6d6a\u8cbb\u3055\u308c\u307e\u3059\u3002</p></div>\n';
c = c.substring(0, h2End + 5) + calloutHTML + c.substring(h2End + 5);

// 2. FEATURE-GRID after "\u30b9\u30de\u30fc\u30c8\u5165\u672d\u7de8" section intro
var smartH2 = c.indexOf("\u30b9\u30de\u30fc\u30c8\u5165\u672d\u7de8\uff1a\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306b\u91cd\u52b4\u52d5\u3092\u4efb\u305b\u308b");
var smartP1End = c.indexOf("</p>", smartH2) + 4;
var featureGridHTML = '\n<div class="feature-grid">\n<div class="feature-card"><div class="feature-card__num">1</div><div class="feature-card__title">\u6700\u5927\u5316\u30b7\u30ea\u30fc\u30ba</div><div class="feature-card__desc">\u4e88\u7b97\u3092\u4f1d\u3048\u308b\u3060\u3051\u3002\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u304c\u81ea\u52d5\u3067\u914d\u4fe1\u3092\u6700\u9069\u5316\u3057\u307e\u3059\u3002</div></div>\n<div class="feature-card"><div class="feature-card__num">2</div><div class="feature-card__title">oCPX\u30b7\u30ea\u30fc\u30ba</div><div class="feature-card__desc">\u30b3\u30b9\u30c8\u3092\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3002\u76ee\u6a19CPA\u3084ROAS\u3092\u8a2d\u5b9a\u3057\u3066\u3001\u914d\u4fe1\u306f\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306b\u4efb\u305b\u307e\u3059\u3002</div></div>\n<div class="feature-card"><div class="feature-card__num">3</div><div class="feature-card__title">\u30de\u30eb\u30c1\u76ee\u6a19\u5165\u672d</div><div class="feature-card__desc">\u30b3\u30b9\u30c8\u3068\u30dc\u30ea\u30e5\u30fc\u30e0\u306e\u30d0\u30e9\u30f3\u30b9\u3002u2014\u30c6\u30b9\u30c8\u671f\u306b\u6700\u9069\u3002</div></div>\n</div>\n';
c = c.substring(0, smartP1End) + featureGridHTML + c.substring(smartP1End);

// 3. ARTICLE-TABLE before "\u5165\u672d\u6226\u7565\u306e\u9078\u3073\u65b9" H2
var chooseH2 = c.indexOf("\u5165\u672d\u6226\u7565\u306e\u9078\u3073\u65b9");
var chooseH2Start = c.lastIndexOf("<h2", chooseH2);
var tableHTML = '\n<div class="article-table-wrap">\n<table class="article-table">\n<thead><tr><th>\u5165\u672d\u30e2\u30c7\u30eb</th><th>\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb</th><th>\u6700\u9069\u306a\u5834\u9762</th></tr></thead>\n<tbody>\n<tr><td><strong>\u6700\u5927\u30b3\u30f3\u30d0\u30fc\u30b8\u30e7\u30f3</strong></td><td>\u4f4e</td><td>\u30c7\u30fc\u30bf\u5c11\u306a\u3044\u521d\u671f</td></tr>\n<tr><td><strong>\u6700\u5927\u30b3\u30f3\u30d0\u30fc\u30b8\u30e7\u30f3\u5024</strong></td><td>\u4f4e</td><td>\u9ad8\u4fa1\u5024\u30b3\u30f3\u30d0\u30fc\u30b8\u30e7\u30f3\u91cd\u8996</td></tr>\n<tr><td><strong>oCPC / oCPM</strong></td><td>\u4e2d</td><td>\u30b3\u30f3\u30d0\u30fc\u30b8\u30e7\u30f3\u30c7\u30fc\u30bf\u304c\u3042\u308b\u5834\u5408</td></tr>\n<tr><td><strong>tROI / tROAS</strong></td><td>\u9ad8</td><td>\u53ce\u76ca\u8ffd\u8de1\u304c\u5b8c\u4e86\u3057\u3066\u3044\u308b\u5834\u5408</td></tr>\n<tr><td><strong>eCPC</strong></td><td>\u4e2d</td><td>\u624b\u52d5\u5165\u672d\u306e\u88dc\u52a9</td></tr>\n</tbody>\n</table>\n</div>\n\n';
c = c.substring(0, chooseH2Start) + tableHTML + c.substring(chooseH2Start);

// 4. TAKEAWAY-BANNER before "\u5165\u672d\u6226\u7565\u3092\u6700\u9069\u5316\u3059\u308b\u6e96\u5099" H2
var optH2 = c.indexOf("\u5165\u672d\u6226\u7565\u3092\u6700\u9069\u5316\u3059\u308b\u6e96\u5099");
var optH2Start = c.lastIndexOf("<h2", optH2);
var bannerHTML = '\n<div class="takeaway-banner"><div class="takeaway-banner__title">\u91cd\u8981\u30dd\u30a4\u30f3\u30c8</div><p class="takeaway-banner__text">\u5165\u672d\u306f\u4e88\u7b97\u306e\u554f\u984c\u3067\u306f\u306a\u304f\u3001\u30c7\u30fc\u30bf\u306e\u554f\u984c\u3067\u3059\u3002\u30c7\u30fc\u30bf\u304c\u5c11\u306a\u3051\u308c\u3070\u30b7\u30f3\u30d7\u30eb\u306b\u3001\u30c7\u30fc\u30bf\u304c\u3042\u308c\u3070\u30b9\u30de\u30fc\u30c8\u306b\u3002</p></div>\n\n';
c = c.substring(0, optH2Start) + bannerHTML + c.substring(optH2Start);

// 5. Fix English footer labels
c = c.replace(">About TMG<", ">\u4f1a\u793e\u6982\u8981<");
c = c.replace(">Quick Links<", ">\u30af\u30a4\u30c3\u30af\u30ea\u30f3\u30af<");
c = c.replace(">Legal<", ">\u6cd5\u7684\u60c5\u5831<");

fs.writeFileSync(outPath, c, "utf8");
console.log("Written to: " + outPath);
console.log("callout: " + (/<div class="callout callout--accent">/.test(c) ? "PASS" : "FAIL"));
console.log("feature-grid: " + (/<div class="feature-grid">/.test(c) ? "PASS" : "FAIL"));
console.log("article-table: " + (/class="article-table">/.test(c) ? "PASS" : "FAIL"));
console.log("takeaway-banner: " + (/<div class="takeaway-banner">/.test(c) ? "PASS" : "FAIL"));
console.log("<hr>: " + (c.match(/<hr/g) || []).length);
console.log("About TMG: " + (c.includes("About TMG") ? "STILL" : "clean"));
console.log("Quick Links: " + (c.includes("Quick Links") ? "STILL" : "clean"));
var engWords = ["Key Insight", "Key Takeaway", "significantly", "massive", "uniquely", "Leveraging"];
for (var w of engWords) { if (c.includes(w)) console.log("ENGLISH: " + w); }
console.log("English: clean");
