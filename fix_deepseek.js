const fs = require("fs");
const srcPath = String.raw`C:\Users\fireh\WorkBuddy\20260326144402\tmg-website\ja\blog\deepseek-v4-price-cut-geo.html`;
const outPath = String.raw`D:\Codex\TMG\deepseek-v4_fixed.html`;
let c = fs.readFileSync(srcPath, "utf8");

// 1. CALLOUT after first H2 (\u65b0\u4fa1\u683c\u306e\u73fe\u5b9f)
const h2End = c.indexOf("</h2>", c.indexOf("<h2"));
const calloutHTML = '\n<div class="callout callout--accent"><div class="callout__label">\u306a\u305c\u91cd\u8981\u304b</div><p>DeepSeek V4\u306e75%\u5272\u5f15\u306f\u6052\u4e45\u7684\u306a\u3082\u306e\u3067\u3059\u3002AI\u691c\u7d22\u306e\u7d4c\u6e08\u5b66\u304c\u6839\u672c\u7684\u306b\u5909\u308f\u308a\u3001GEO\u304c\u65b0\u305f\u306a\u512a\u5148\u4e8b\u9805\u306b\u306a\u308a\u307e\u3057\u305f\u3002</p></div>\n';
c = c.substring(0, h2End + 5) + calloutHTML + c.substring(h2End + 5);

// 2. FEATURE-GRID after "\u4fa1\u683c\u6226\u4e89\u306f\u5148\u884c\u8005\u306b\u6709\u5229\u306b\u50cd\u304f" H3
const pioneerH3 = c.indexOf("\u4fa1\u683c\u6226\u4e89\u306f\u5148\u884c\u8005\u306b\u6709\u5229\u306b\u50cd\u304f");
const pioneerP1End = c.indexOf("</p>", pioneerH3) + 4;
const featureGridHTML = '\n<div class="feature-grid">\n<div class="feature-card"><div class="feature-card__num">1</div><div class="feature-card__title">\u691c\u7d22\u30dc\u30ea\u30e5\u30fc\u30e0\u6025\u589e</div><div class="feature-card__desc">\u5ec3\u306b\u3064\u304d\u306e\u4fa1\u683c\u3067AI\u691c\u7d22\u304c\u5229\u7528\u53ef\u80fd\u306b\u306a\u308a\u3001\u30e6\u30fc\u30b6\u30fc\u6570\u304c\u6025\u6fe1\u3057\u3066\u3044\u307e\u3059\u3002</div></div>\n<div class="feature-card"><div class="feature-card__num">2</div><div class="feature-card__title">\u5f15\u7528\u306e\u30cf\u30fc\u30c9\u30eb\u4e0a\u6607</div><div class="feature-card__desc">\u30b3\u30f3\u30c6\u30f3\u30c4\u7af6\u4e89\u304c\u6fc0\u5316\u3057\u3001\u6a39\u6a39\u3057\u3044\u6a29\u5a01\u304c\u3042\u308b\u30b3\u30f3\u30c6\u30f3\u30c4\u3060\u3051\u304c\u5f15\u7528\u3055\u308c\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002</div></div>\n<div class="feature-card"><div class="feature-card__num">3</div><div class="feature-card__title">\u5148\u884c\u8005\u512a\u4f4d</div><div class="feature-card__desc">\u4eca3\u301c6\u3016\u6708\u3067GEO\u30d7\u30ec\u30bc\u30f3\u30b9\u3092\u78ba\u7acb\u3059\u308b\u30d6\u30e9\u30f3\u30c9\u304c\u3001\u9577\u5e74\u304b\u3051\u308bAI\u767a\u898b\u3092\u652f\u914d\u3057\u307e\u3059\u3002</div></div>\n</div>\n';
c = c.substring(0, pioneerP1End) + featureGridHTML + c.substring(pioneerP1End);

// 3. TAKEAWAY-BANNER before "\u30d6\u30e9\u30f3\u30c9\u304c\u4eca\u3084\u308b\u3079\u304d\u3053\u3068" H2
const actionH2 = c.indexOf("\u30d6\u30e9\u30f3\u30c9\u304c\u4eca\u3084\u308b\u3079\u304d\u3053\u3068");
const actionH2Start = c.lastIndexOf("<h2", actionH2);
const bannerHTML = '\n<div class="takeaway-banner"><div class="takeaway-banner__title">\u91cd\u8981\u30dd\u30a4\u30f3\u30c8</div><p class="takeaway-banner__text">GEO\u306fAI\u691c\u7d22\u306b\u3068\u3063\u3066\u30012005\u5e74\u306eGoogle\u306b\u304a\u3051\u308bSEO\u3068\u540c\u3058\u3067\u3059\u3002\u65e9\u671f\u306b\u884c\u52d5\u3059\u308b\u30d6\u30e9\u30f3\u30c9\u304c\u30c1\u30e3\u30cd\u30eb\u3092\u652f\u914d\u3057\u307e\u3059\u3002</p></div>\n\n';
c = c.substring(0, actionH2Start) + bannerHTML + c.substring(actionH2Start);

// 4. Remove source/translation metadata at bottom
const sourceIdx = c.indexOf('<p><em>Source: https');
if (sourceIdx >= 0) {
  const sourceEnd = c.indexOf("</p>", sourceIdx) + 4;
  c = c.substring(0, sourceIdx) + c.substring(sourceEnd);
  console.log("Removed source metadata");
}

fs.writeFileSync(outPath, c, "utf8");
console.log("Written to: " + outPath);
console.log("callout: " + (/<div class="callout callout--accent">/.test(c) ? "PASS" : "FAIL"));
console.log("feature-grid: " + (/<div class="feature-grid">/.test(c) ? "PASS" : "FAIL"));
console.log("article-table: " + (/class="article-table">/.test(c) ? "PASS" : "FAIL"));
console.log("takeaway-banner: " + (/<div class="takeaway-banner">/.test(c) ? "PASS" : "FAIL"));
const engWords = ["Key Insight", "Key Takeaway", "significantly", "massive", "uniquely", "Leveraging"];
for (const w of engWords) { if (c.includes(w)) console.log("ENGLISH: " + w); }
console.log("English: clean");
