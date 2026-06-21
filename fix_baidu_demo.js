const fs = require("fs");
const srcPath = "C:\\Users\\fireh\\WorkBuddy\\20260326144402\\tmg-website\\ja\\blog\\baidu-demographics-who-are-these-735m-users.html";
const outPath = "D:\\Codex\\TMG\\baidu-demographics_fixed.html";
let c = fs.readFileSync(srcPath, "utf8");

// 1. CALLOUT after first H2 (\u306a\u305c2026\u5e74\u306b\u767e\u5ea6\u30e6\u30fc\u30b6\u30fc\u50cf\u304c\u91cd\u8981\u306a\u306e\u304b)
const h2End = c.indexOf("</h2>", c.indexOf("<h2"));
const calloutHTML = '\n<div class="callout callout--accent"><div class="callout__label">\u306a\u305c\u91cd\u8981\u304b</div><p>\u767e\u5ea6\u306e7.35\u5104\u4eba\u4ee5\u4e0a\u306e\u30e6\u30fc\u30b6\u30fc\u306f\u3001\u4e2d\u56fd\u6700\u5927\u306e\u691c\u7d22\u610f\u56f3\u30d7\u30fc\u30eb\u3092\u8868\u3057\u3066\u3044\u307e\u3059\u3002\u30e6\u30fc\u30b6\u30fc\u50cf\u3092\u7406\u89e3\u3059\u308b\u3053\u3068\u3067\u3001\u30ad\u30fc\u30ef\u30fc\u30c9\u6226\u7565\u3001\u5e83\u544a\u30b3\u30d4\u30fc\u3001\u30bf\u30fc\u30b2\u30c6\u30a3\u30f3\u30b0\u304c\u5909\u308f\u308a\u307e\u3059\u3002</p></div>\n';
c = c.substring(0, h2End + 5) + calloutHTML + c.substring(h2End + 5);

// 2. FEATURE-GRID after "\u5e74\u9f62\u5206\u5e03" section intro paragraph
const ageH2 = c.indexOf("\u5e74\u9f62\u5206\u5e03\uff1a80\u5f8c\u30fb90\u5f8c\u304c\u652f\u914d");
const ageP1End = c.indexOf("</p>", ageH2) + 4;
const featureGridHTML = '\n<div class="feature-grid">\n<div class="feature-card"><div class="feature-card__num">1</div><div class="feature-card__title">25\u201334\u6b73\uff0832%\uff09</div><div class="feature-card__desc">\u767e\u5ea6\u306e\u6700\u5927\u30bb\u30b0\u30e1\u30f3\u30c8\u3002\u30c6\u30af\u30ce\u30ed\u30b8\u30fc\u8cfc\u5165\u3001\u4f4f\u5b85\u3001\u91d1\u878d\u88fd\u54c1\u306e\u610f\u601d\u6c7a\u5b9a\u5c64\u3002</div></div>\n<div class="feature-card"><div class="feature-card__num">2</div><div class="feature-card__title">35\u201344\u6b73\uff0830%\uff09</div><div class="feature-card__desc">\u30a8\u30f3\u30bf\u30fc\u30d7\u30e9\u30a4\u30ba\u610f\u601d\u6c7a\u5b9a\u8005\u3001B2B\u30d0\u30a4\u30e4\u30fc\u3001\u9ad8\u984d\u6d88\u8cbb\u8005\u306e\u30b3\u30a2\u5c64\u3002</div></div>\n<div class="feature-card"><div class="feature-card__num">3</div><div class="feature-card__title">18\u201324\u6b73\uff0818%\uff09</div><div class="feature-card__desc">\u5b66\u751f\u30fb\u82e5\u624e\u30a4\u30e9\u30b9\u30bf\u5c02\u9580\u5bb6\u3002\u30a8\u30f3\u30c8\u30ea\u30fc\u7d44\u3092\u30b1\u30e2\u30fb\u30b2\u30fc\u30e0\u30fb\u6559\u80b2\u3067\u30ad\u30e3\u30d7\u30c1\u30e3\u30fc\u3002</div></div>\n</div>\n';
c = c.substring(0, ageP1End) + featureGridHTML + c.substring(ageP1End);

// 3. ARTICLE-TABLE before "\u90fd\u5e02\u30c6\u30a3\u30a2\u5206\u5e03" section (audience category table)
const cityH2Idx = c.indexOf("\u90fd\u5e02\u30c6\u30a3\u30a2\u5206\u5e03\uff1a1\u301c3\u7d7a\u90fd\u5e02\u3067\u5f37\u3044");
const cityH2Start = c.lastIndexOf("<h2", cityH2Idx);
const tableHTML = '\n<div class="article-table-wrap">\n<table class="article-table">\n<thead><tr><th>\u5e74\u9f62\u5c64</th><th>\u5272\u5408</th><th>\u4e3b\u8981\u8208\u5473</th><th>\u5e83\u544a\u6226\u7565\u30d2\u30f3\u30c8</th></tr></thead>\n<tbody>\n<tr><td><strong>18\u201324</strong></td><td>18%</td><td>\u30b2\u30fc\u30e0\u3001\u30a8\u30f3\u30bf\u30e1\u3001\u6559\u80b2</td><td>\u52d5\u753b\u5e83\u544a\u30fb\u30a4\u30f3\u30d5\u30eb\u30a8\u30f3\u30b5\u30fc\u6d3b\u7528</td></tr>\n<tr><td><strong>25\u201334</strong></td><td>32%</td><td>\u30c6\u30af\u30ce\u30ed\u30b8\u30fc\u3001\u4f4f\u5b85\u3001\u91d1\u878d</td><td>\u691c\u7d22\u5e83\u544a\u3067\u9ad8\u610f\u6b3a\u30ad\u30fc\u30ef\u30fc\u30c9\u3092\u30bf\u30fc\u30b2\u30c3\u30c8</td></tr>\n<tr><td><strong>35\u201344</strong></td><td>30%</td><td>B2B\u3001\u8eca\u3001\u4fdd\u967a\u3001\u4e0d\u52d7\u7523</td><td>\u30a8\u30f3\u30bf\u30fc\u30d7\u30e9\u30a4\u30ba\u6226\u7565\u30fb\u30ea\u30b9\u30b1\u30a4\u30d4\u30f3\u30b0\u5e83\u544a</td></tr>\n<tr><td><strong>45+</strong></td><td>20%</td><td>\u5065\u5eb7\u3001\u65c5\u884c\u3001\u8ca1\u52d9</td><td>\u691c\u7d22\u7d50\u679c\u4e0a\u4f4d\u8868\u793a\u30fb\u30d6\u30e9\u30f3\u30c9\u30be\u30fc\u30f3\u5e83\u544a</td></tr>\n</tbody>\n</table>\n</div>\n\n';
c = c.substring(0, cityH2Start) + tableHTML + c.substring(cityH2Start);

// 4. TAKEAWAY-BANNER before "\u7d50\u8ad6" section
const conclusionH2 = c.indexOf("\u7d50\u8ad6\uff08\uff0bTMG\u304c\u9078\u3070\u308c\u308b\u7406\u7531\uff09");
const conclusionH2Start = c.lastIndexOf("<h2", conclusionH2);
const bannerHTML = '\n<div class="takeaway-banner"><div class="takeaway-banner__title">\u91cd\u8981\u30dd\u30a4\u30f3\u30c8</div><p class="takeaway-banner__text">\u767e\u5ea6\u306e\u30e6\u30fc\u30b6\u30fc\u50cf\u306f\u5e73\u5747\u7684\u306a\u3082\u306e\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u2014\u201425\u301c45\u6b73\u306e\u90fd\u5e02\u90e8\u30fb\u4e2d\u9ad8\u6d88\u8cbb\u5c64\u306b\u96c6\u4e2d\u3057\u3066\u3044\u307e\u3059\u3002\u30ad\u30fc\u30ef\u30fc\u30c9\u3054\u3068\u306e\u30aa\u30fc\u30c7\u30a3\u30a8\u30f3\u30b9\u30d7\u30ed\u30d5\u30a1\u30a4\u30eb\u3092\u767e\u5ea6\u6307\u6570\u3067\u78ba\u8a8d\u3059\u308b\u3053\u3068\u304c\u6700\u9069\u3067\u3059\u3002</p></div>\n\n';
c = c.substring(0, conclusionH2Start) + bannerHTML + c.substring(conclusionH2Start);

fs.writeFileSync(outPath, c, "utf8");
console.log("Written to: " + outPath);
console.log("callout: " + (/<div class="callout callout--accent">/.test(c) ? "PASS" : "FAIL"));
console.log("feature-grid: " + (/<div class="feature-grid">/.test(c) ? "PASS" : "FAIL"));
console.log("article-table: " + (/class="article-table">/.test(c) ? "PASS" : "FAIL"));
console.log("takeaway-banner: " + (/<div class="takeaway-banner">/.test(c) ? "PASS" : "FAIL"));

// English check
const engWords = ["Key Insight", "Key Takeaway", "Key Data", "significantly", "massive", "uniquely", "Leveraging"];
for (const w of engWords) {
  if (c.includes(w)) console.log("ENGLISH REMNANT: " + w);
}
console.log("English check: clean");
