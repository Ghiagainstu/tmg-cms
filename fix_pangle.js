const fs = require("fs");
const srcPath = String.raw`C:\Users\fireh\WorkBuddy\20260326144402\tmg-website\ja\blog\pangle-ads.html`;
const outPath = String.raw`D:\Codex\TMG\pangle_fixed.html`;
let c = fs.readFileSync(srcPath, "utf8");

// 1. CALLOUT after first H2
var h2End = c.indexOf("</h2>", c.indexOf("<h2"));
var calloutHTML = '\n<div class="callout callout--accent"><div class="callout__label">\u306a\u305c\u91cd\u8981\u304b</div><p>Pangle\u306fByteDance\u306e\u30b0\u30ed\u30fc\u30d0\u30eb\u5e83\u544a\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u3067\u3001150\u4ee5\u4e0a\u306e\u56fd\u306e\u30e6\u30fc\u30b6\u30fc\u306b\u30ea\u30fc\u30c1\u3067\u304d\u307e\u3059\u3002\u30e2\u30d0\u30a4\u30eb\u5e83\u544a\u306e\u56fd\u969b\u5c55\u958b\u306b\u4e0d\u53ef\u6b20\u306a\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3067\u3059\u3002</p></div>\n';
c = c.substring(0, h2End + 5) + calloutHTML + c.substring(h2End + 5);

// 2. FEATURE-GRID after "\u5165\u672d\u30e2\u30c7\u30eb" H2
var bidH2 = c.indexOf("\u5165\u672d\u30e2\u30c7\u30eb");
var bidP1End = c.indexOf("</p>", bidH2) + 4;
var featureGridHTML = '\n<div class="feature-grid">\n<div class="feature-card"><div class="feature-card__num">1</div><div class="feature-card__title">OCPC</div><div class="feature-card__desc">\u30af\u30ea\u30c3\u30af\u6700\u9069\u5316\u3002\u30a2\u30d7\u30ea\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3001\u30b5\u30a4\u30f3\u30a2\u30c3\u30d7\u7b49\u306e\u30b3\u30f3\u30d0\u30fc\u30b8\u30e7\u30f3\u30a4\u30d9\u30f3\u30c8\u306b\u5411\u3051\u3066\u5165\u672d\u3092\u6700\u9069\u5316\u3002</div></div>\n<div class="feature-card"><div class="feature-card__num">2</div><div class="feature-card__title">OCPM</div><div class="feature-card__desc">\u30a4\u30f3\u30d7\u30ec\u30c3\u30b7\u30e7\u30f3\u6700\u9069\u5316\u3002\u30a4\u30f3\u30d7\u30ec\u30c3\u30b7\u30e7\u30f3\u5358\u4f4d\u3067\u8ab2\u91d1\u3057\u306a\u304c\u3089\u3001\u30b3\u30f3\u30d0\u30fc\u30b8\u30e7\u30f3\u78ba\u7387\u306e\u9ad8\u3044\u30e6\u30fc\u30b6\u30fc\u306b\u81ea\u52d5\u914d\u4fe1\u3002</div></div>\n<div class="feature-card"><div class="feature-card__num">3</div><div class="feature-card__title">\u5831\u916c\u578b</div><div class="feature-card__desc">\u30e6\u30fc\u30b6\u30fc\u304c\u5e83\u544a\u8996\u8074\u3092\u9078\u629e\u3057\u3001\u30a4\u30f3\u30a2\u30d7\u30ea\u5831\u916c\u3092\u5f97\u308b\u3002\u6700\u9ad8\u306e\u5b8c\u4e86\u7387\u3068\u30d6\u30e9\u30f3\u30c9\u30bb\u30fc\u30d5\u30c6\u30a3\u3092\u5b9f\u73fe\u3002</div></div>\n</div>\n';
c = c.substring(0, bidP1End) + featureGridHTML + c.substring(bidP1End);

// 3. Fix English footer labels
c = c.replace(">About TMG<", ">\u4f1a\u793e\u6982\u8981<");
c = c.replace(">Quick Links<", ">\u30af\u30a4\u30c3\u30af\u30ea\u30f3\u30af<");
c = c.replace(">Legal<", ">\u6cd5\u7684\u60c5\u5831<");

// 4. Fix Chinese character
c = c.replace("\u6709\u4ef7\u5024", "\u6709\u7528"); // 有价值 -> 有用

// 5. Fix duplicate heading text
c = c.replace("\u5bfe\u5fdc\u5bfe\u5fdc\u5e83\u544a\u30d5\u30a9\u30fc\u30de\u30c3\u30c8", "\u5bfe\u5fdc\u5e83\u544a\u30d5\u30a9\u30fc\u30de\u30c3\u30c8"); // 対応対応 -> 対応

fs.writeFileSync(outPath, c, "utf8");
console.log("Written to: " + outPath);
console.log("callout: " + (/<div class="callout callout--accent">/.test(c) ? "PASS" : "FAIL"));
console.log("feature-grid: " + (/<div class="feature-grid">/.test(c) ? "PASS" : "FAIL"));
console.log("article-table: " + (/class="article-table">/.test(c) ? "PASS" : "FAIL"));
console.log("takeaway-banner: " + (/<div class="takeaway-banner">/.test(c) ? "PASS" : "FAIL"));
console.log("<hr>: " + (c.match(/<hr/g) || []).length);
console.log("About TMG: " + (c.includes("About TMG") ? "STILL" : "clean"));
console.log("Quick Links: " + (c.includes("Quick Links") ? "STILL" : "clean"));
console.log("Legal: " + (c.match(/>Legal</) ? "STILL" : "clean"));
console.log("\u6709\u4ef7\u5024: " + (c.includes("\u6709\u4ef7\u5024") ? "STILL" : "clean"));
console.log("\u5bfe\u5fdc\u5bfe\u5fdc: " + (c.includes("\u5bfe\u5fdc\u5bfe\u5fdc") ? "STILL" : "clean"));
