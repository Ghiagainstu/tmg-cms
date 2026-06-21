const fs = require("fs");
const srcPath = "C:\\Users\\fireh\\WorkBuddy\\20260326144402\\tmg-website\\ja\\blog\\ad-billing-models-explained.html";
const outPath = "D:\\Codex\\TMG\\ad-billing-models-explained_fixed.html";
let c = fs.readFileSync(srcPath, "utf8");

// 1. Add callout callout--accent after first H2
const firstH2End = c.indexOf("</h2>", c.indexOf("<h2"));
const insertAfterH2 = firstH2End + "</h2>".length;
const calloutHTML = '\n    <div class="callout callout--accent"><div class="callout__label">\u306a\u305c\u91cd\u8981\u304b</div><p>\u9593\u9055\u3063\u305f\u8ab2\u91d1\u30e2\u30c7\u30eb\u3092\u9078\u3076\u3068\u3001\u9593\u9055\u3063\u305f\u7d50\u679c\u306b\u5bfe\u3057\u3066\u652f\u6257\u3046\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002\u4e2d\u56fd\u306e\u4e3b\u89816\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3059\u3079\u3066\u3067\u3001\u30e2\u30c7\u30eb\u9078\u629e\u304c\u30ad\u30e3\u30f3\u30da\u30fc\u30f3\u306e\u6210\u6557\u3092\u5de6\u53f3\u3057\u307e\u3059\u3002</p></div>\n';
c = c.substring(0, insertAfterH2) + calloutHTML + c.substring(insertAfterH2);

// 2. Add feature-grid after first <p> in パフォーマンス広告 section
const perfH2Idx = c.indexOf("\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u5e83\u544a\uff1a\u884c\u52d5\u306b\u6599\u91d1\u3092\u6255\u3046");
const perfP1End = c.indexOf("</p>", perfH2Idx) + 4;
const featureGridHTML = '\n    <div class="feature-grid">\n<div class="feature-card"><div class="feature-card__num">1</div><div class="feature-card__title">CPC\uff08Cost Per Click\uff09</div><div class="feature-card__desc">\u30af\u30ea\u30c3\u30af\u3054\u3068\u306b\u8ab2\u91d1\u3002\u30b3\u30f3\u30d0\u30fc\u30b8\u30e7\u30f3\u8ffd\u8de1\u304c\u4e0d\u5341\u5206\u306a\u65b0\u898f\u30ad\u30e3\u30f3\u30da\u30fc\u30f3\u306e\u51fa\u767a\u70b9\u3068\u3057\u3066\u6700\u9069\u3002</div></div>\n<div class="feature-card"><div class="feature-card__num">2</div><div class="feature-card__title">oCPM\uff08\u6700\u9069\u5316CPM\uff09</div><div class="feature-card__desc">\u30a4\u30f3\u30d7\u30ec\u30c3\u30b7\u30e7\u30f3\u5358\u4f4d\u3067\u8ab2\u91d1\u3055\u308c\u307e\u3059\u304c\u3001\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u304c\u30b3\u30f3\u30d0\u30fc\u30b8\u30e7\u30f3\u78ba\u7387\u306e\u9ad8\u3044\u30e6\u30fc\u30b6\u30fc\u306b\u81ea\u52d5\u7684\u306b\u914d\u4fe1\u3002\u4e2d\u56fd\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3067\u6700\u3082\u666e\u53ca\u3002</div></div>\n<div class="feature-card"><div class="feature-card__num">3</div><div class="feature-card__title">CPA\uff08Cost Per Action\uff09</div><div class="feature-card__desc">\u30b3\u30f3\u30d0\u30fc\u30b8\u30e7\u30f3\u5b8c\u4e86\u6642\u306e\u307f\u8ab2\u91d1\u3002\u5341\u5206\u306a\u30b3\u30f3\u30d0\u30fc\u30b8\u30e7\u30f3\u30c7\u30fc\u30bf\u304c\u3042\u308b\u6210\u719f\u3057\u305f\u30ad\u30e3\u30f3\u30da\u30fc\u30f3\u306b\u6700\u9069\u3002</div></div>\n</div>\n';
c = c.substring(0, perfP1End) + featureGridHTML + c.substring(perfP1End);

// 3. Add article-table before TMG\u306e\u8996\u70b9 section
const tmgH2Idx = c.indexOf("\ud83c\udfaf TMG\u306e\u8996\u70b9\uff1a\u30e2\u30c7\u30eb\u3060\u3051\u306e\u554f\u984c\u3067\u306f\u306a\u3044");
const tableHTML = '\n    <div class="article-table-wrap">\n      <table class="article-table">\n        <thead>\n          <tr><th>\u8ab2\u91d1\u30e2\u30c7\u30eb</th><th>\u652f\u6257\u3044\u30bf\u30a4\u30df\u30f3\u30b0</th><th>\u6700\u9069\u306a\u7528\u9014</th><th>\u30ea\u30b9\u30af</th></tr>\n        </thead>\n        <tbody>\n          <tr><td><strong>CPM</strong></td><td>1,000\u30a4\u30f3\u30d7\u30ec\u30c3\u30b7\u30e7\u30f3\u3054\u3068</td><td>\u30d6\u30e9\u30f3\u30c9\u8a8d\u77e5\u30fb\u65b0\u88fd\u54c1\u30ed\u30fc\u30f3\u30c1</td><td>\u30af\u30ea\u30c3\u30af\u3084\u30b3\u30f3\u30d0\u30fc\u30b8\u30e7\u30f3\u3092\u4fdd\u8a3c\u3057\u306a\u3044</td></tr>\n          <tr><td><strong>CPD</strong></td><td>1\u65e5\u3042\u305f\u308a\u56fa\u5b9a</td><td>\u30b9\u30d7\u30e9\u30c3\u30b7\u30e5\u5e83\u544a\u30fb\u30d0\u30ca\u30fc\u72ec\u5360</td><td>\u30b3\u30b9\u30c8\u9ad8\u30fb\u67d4\u8edf\u6027\u306a\u3057</td></tr>\n          <tr><td><strong>CPV</strong></td><td>\u52d5\u753b\u8996\u8074\u3054\u3068</td><td>\u52d5\u753b\u30d6\u30e9\u30f3\u30c9\u30ad\u30e3\u30f3\u30da\u30fc\u30f3</td><td>\u300c\u8996\u8074\u300d\u5b9a\u7fa9\u304c\u7570\u306a\u308b</td></tr>\n          <tr><td><strong>CPC</strong></td><td>\u30af\u30ea\u30c3\u30af\u3054\u3068</td><td>\u65b0\u898f\u30c8\u30e9\u30d5\u30a3\u30c3\u30af\u7372\u5f97</td><td>\u30af\u30ea\u30c3\u30af\u8a90\u6b3a\u306e\u30ea\u30b9\u30af</td></tr>\n          <tr><td><strong>oCPM</strong></td><td>1,000\u30a4\u30f3\u30d7\u30ec\u30c3\u30b7\u30e7\u30f3\u3054\u3068\uff08\u6700\u9069\u5316\uff09</td><td>\u30b3\u30f3\u30d0\u30fc\u30b8\u30e7\u30f3\u91cd\u8996\u306e\u6210\u719f\u30ad\u30e3\u30f3\u30da\u30fc\u30f3</td><td>\u5341\u5206\u306a\u30c7\u30fc\u30bf\u304c\u306a\u3044\u3068\u4e0d\u5b89\u5b9a</td></tr>\n          <tr><td><strong>CPA</strong></td><td>\u30b3\u30f3\u30d0\u30fc\u30b8\u30e7\u30f3\u3054\u3068</td><td>\u30ea\u30bf\u30fc\u30b2\u30c6\u30a3\u30f3\u30b0\u30fb\u6210\u719f\u5546\u54c1</td><td>\u5927\u91cf\u306e\u904e\u53bb\u30c7\u30fc\u30bf\u304c\u5fc5\u8981</td></tr>\n          <tr><td><strong>CPS</strong></td><td>\u6210\u7d04\u3054\u3068</td><td>\u30a4\u30f3\u30d5\u30eb\u30a8\u30f3\u30b5\u30fc\u30fb\u30a2\u30d5\u30a3\u30ea\u30a8\u30a4\u30c8</td><td>\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u9650\u5b9a</td></tr>\n        </tbody>\n      </table>\n    </div>\n\n';
c = c.substring(0, tmgH2Idx) + tableHTML + c.substring(tmgH2Idx);

// 4. Add takeaway-banner before CTA section
const ctaH2Idx = c.indexOf("\u5e83\u544a\u4e88\u7b97\u3092\u3082\u3063\u3068\u8ce2\u304f\u4f7f\u3046\u6e96\u5099\u306f\u3067\u304d\u307e\u3057\u305f\u304b\uff1f");
const bannerHTML = '\n    <div class="takeaway-banner"><div class="takeaway-banner__title">\u91cd\u8981\u30dd\u30a4\u30f3\u30c8</div><p class="takeaway-banner__text">\u8ab2\u91d1\u30e2\u30c7\u30eb\u306f\u5358\u306a\u308b\u8a2d\u5b9a\u9805\u76ee\u3067\u306f\u306a\u304f\u3001\u5e83\u544a\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u30a2\u30eb\u30b4\u30ea\u30ba\u30e0\u306b\u300c\u4f55\u3092\u6700\u9069\u5316\u3059\u3079\u304d\u304b\u300d\u3092\u6559\u3048\u308b\u4fe1\u53f7\u3067\u3059\u3002\u6b63\u3057\u3044\u30e2\u30c7\u30eb\u9078\u3073\u306f\u3001\u307e\u305a\u30c8\u30e9\u30c3\u30ad\u30f3\u30b0\u306e\u6b63\u78ba\u6027\u304b\u3089\u59cb\u307e\u308a\u307e\u3059\u3002</p></div>\n\n';
c = c.substring(0, ctaH2Idx) + bannerHTML + c.substring(ctaH2Idx);

fs.writeFileSync(outPath, c, "utf8");
console.log("Written to: " + outPath);

// Verify
console.log("callout: " + /<div class="callout callout--accent">/.test(c));
console.log("feature-grid: " + /<div class="feature-grid">/.test(c));
console.log("article-table: " + /<div class="article-table">/.test(c));
console.log("takeaway-banner: " + /<div class="takeaway-banner">/.test(c));
