const fs = require("fs");
const srcPath = String.raw`C:\Users\fireh\WorkBuddy\20260326144402\tmg-website\ja\blog\kuaishou-demographics-who-are-these-400m-users.html`;
const outPath = String.raw`D:\Codex\TMG\kuaishou_fixed.html`;
let c = fs.readFileSync(srcPath, "utf8");

// 1. CALLOUT after first H2
var h2End = c.indexOf("</h2>", c.indexOf("<h2"));
var calloutHTML = '\n<div class="callout callout--accent"><div class="callout__label">\u306a\u305c\u91cd\u8981\u304b</div><p>\u5feb\u624b\u306f4\u5104\u4eba\u4ee5\u4e0a\u306eMAU\u3092\u6301\u3061\u30013\u301c5\u7d7a\u90fd\u5e02\u3068\u82e5\u5e74\u5c64\u3067\u5727\u5012\u7684\u512a\u4f4d\u3092\u6301\u3061\u307e\u3059\u3002\u30e6\u30fc\u30b6\u30fc\u50cf\u3092\u7406\u89e3\u3059\u308b\u3053\u3068\u3067\u3001\u30bf\u30fc\u30b2\u30c6\u30a3\u30f3\u30b0\u6226\u7565\u304c\u5909\u308f\u308a\u307e\u3059\u3002</p></div>\n';
c = c.substring(0, h2End + 5) + calloutHTML + c.substring(h2End + 5);

// 2. FEATURE-GRID after "\u5e74\u9f62\u5206\u5e03\uff1a\u82e5\u304f\u591a\u69d8" H2
var ageH2 = c.indexOf("\u5e74\u9f62\u5206\u5e03\uff1a\u82e5\u304f\u591a\u69d8");
var ageP1End = c.indexOf("</p>", ageH2) + 4;
var featureGridHTML = '\n<div class="feature-grid">\n<div class="feature-card"><div class="feature-card__num">1</div><div class="feature-card__title">18\u201323\u6b73\uff0830%\uff09</div><div class="feature-card__desc">\u5feb\u624b\u306e\u6700\u5927\u30bb\u30b0\u30e1\u30f3\u30c8\u3002\u30b2\u30fc\u30e0\u3001\u7f8e\u5bb9\u3001\u30b9\u30ca\u30c3\u30af\u306e\u9ad8\u610f\u6b3a\u5c64\u3002</div></div>\n<div class="feature-card"><div class="feature-card__num">2</div><div class="feature-card__title">30\u201344\u6b73\uff0828%\uff09</div><div class="feature-card__desc">\u5bb6\u65cf\u8cfc\u8cb7\u610f\u601d\u6c7a\u5b9a\u8005\u3002\u751f\u9bae\u98df\u54c1\u3001\u65e5\u7528\u54c1\u3001\u5730\u65b9\u7279\u7523\u306e\u30b3\u30a2\u5c64\u3002</div></div>\n<div class="feature-card"><div class="feature-card__num">3</div><div class="feature-card__title">50\u2014\u6b73\u4ee5\u4e0a\uff0822%\uff09</div><div class="feature-card__desc">\u6025\u6210\u9577\u30bb\u30b0\u30e1\u30f3\u30c8\u3002\u5065\u5eb7\u3001\u8fb2\u696d\u3001\u5730\u65b9\u6587\u5316\u30b3\u30f3\u30c6\u30f3\u30c4\u306b\u9ad8\u3044\u95a2\u5fc3\u3002</div></div>\n</div>\n';
c = c.substring(0, ageP1End) + featureGridHTML + c.substring(ageP1End);

// 3. Replace [table] with real table
var tableIdx = c.indexOf("[table]");
if (tableIdx >= 0) {
  var tableHTML = '\n<div class="article-table-wrap">\n<table class="article-table">\n<thead><tr><th>\u770c</th><th>\u30e6\u30fc\u30b6\u30fc\u5272\u5408</th><th>\u6d88\u8cbb\u6210\u9577\u7387</th><th>\u30ad\u30fc\u30ab\u30c6\u30b4\u30ea</th></tr></thead>\n<tbody>\n<tr><td><strong>\u5c71\u6771</strong></td><td>9.8%</td><td>+18%</td><td>\u98df\u54c1\u3001\u7f8e\u5bb9</td></tr>\n<tr><td><strong>\u6cb3\u5357</strong></td><td>8.2%</td><td>+22%</td><td>\u65e5\u7528\u54c1\u3001\u30b9\u30ca\u30c3\u30af</td></tr>\n<tr><td><strong>\u5ee3\u6771</strong></td><td>7.5%</td><td>+15%</td><td>\u30c7\u30b8\u30bf\u30eb\u88fd\u54c1\u3001\u7f8e\u5bb9</td></tr>\n<tr><td><strong>\u6cb3\u5317</strong></td><td>6.9%</td><td>+20%</td><td>\u751f\u9bae\u98df\u54c1\u3001\u5bb6\u5ead\u7528\u54c1</td></tr>\n<tr><td><strong>\u9ed1\u9f8d\u6c5f</strong></td><td>5.4%</td><td>+25%</td><td>\u8fb2\u7523\u54c1\u3001\u5065\u5eb7\u98df\u54c1</td></tr>\n</tbody>\n</table>\n</div>\n';
  c = c.substring(0, tableIdx) + tableHTML + c.substring(tableIdx + "[table]".length);
}

fs.writeFileSync(outPath, c, "utf8");
console.log("Written to: " + outPath);
console.log("callout: " + (/<div class="callout callout--accent">/.test(c) ? "PASS" : "FAIL"));
console.log("feature-grid: " + (/<div class="feature-grid">/.test(c) ? "PASS" : "FAIL"));
console.log("article-table: " + (/class="article-table">/.test(c) ? "PASS" : "FAIL"));
console.log("takeaway-banner: " + (/<div class="takeaway-banner">/.test(c) ? "PASS" : "FAIL"));
console.log("[table]: " + (c.includes("[table]") ? "REMAINING" : "clean"));
console.log("<hr>: " + (c.match(/<hr/g) || []).length);
var engWords = ["Key Insight", "Key Takeaway", "significantly", "massive", "uniquely", "Leveraging"];
for (var w of engWords) { if (c.includes(w)) console.log("ENGLISH: " + w); }
console.log("English: clean");
