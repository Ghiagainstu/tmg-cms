const fs = require("fs");
const srcPath = String.raw`C:\Users\fireh\WorkBuddy\20260326144402\tmg-website\ja\blog\tencent-ads-home-furnishing-ja.html`;
const outPath = String.raw`D:\Codex\TMG\tencent-home_fixed.html`;
let c = fs.readFileSync(srcPath, "utf8");

// 1. CALLOUT after first H2
var h2End = c.indexOf("</h2>", c.indexOf("<h2"));
var calloutHTML = '\n<div class="callout callout--accent"><div class="callout__label">\u306a\u305c\u91cd\u8981\u304b</div><p>\u30c6\u30f3\u30bb\u30f3\u30c8\u5e83\u544a\u306e\u30d7\u30ec\u30df\u30a2\u30e0\u30b3\u30f3\u30c6\u30f3\u30c4\u306f\u3001\u30db\u30fc\u30e0\u30a4\u30f3\u30c6\u30a3\u30a2\u30d6\u30e9\u30f3\u30c9\u306b\u7279\u5316\u3057\u305f\u9ad8\u54c1\u8cea\u306a\u30ea\u30fc\u30c1\u3092\u5b9f\u73fe\u3057\u307e\u3059\u3002</p></div>\n';
c = c.substring(0, h2End + 5) + calloutHTML + c.substring(h2End + 5);

// 2. FEATURE-GRID after "\u30af\u30ea\u30a8\u30a4\u30bf\u30fc\u30a2\u30c9\u30d0\u30f3\u30c6\u30fc\u30b8" H2
var creatorH2 = c.indexOf("4\u3064\u306e\u30af\u30ea\u30a8\u30a4\u30bf\u30fc\u30a2\u30c9\u30d0\u30f3\u30c6\u30fc\u30b8");
var creatorP1End = c.indexOf("</p>", creatorH2) + 4;
var featureGridHTML = '\n<div class="feature-grid">\n<div class="feature-card"><div class="feature-card__num">1</div><div class="feature-card__title">\u6df1\u3044\u30aa\u30ea\u30b8\u30ca\u30eb\u30b3\u30f3\u30c6\u30f3\u30c4</div><div class="feature-card__desc">\u5de5\u7a0b\u30fb\u6750\u6599\u30fb\u30c7\u30b6\u30a4\u30f3\u306e\u5c02\u9580\u7684\u306a\u89e3\u8aac\u3002\u5358\u306a\u308b\u5546\u54c1\u7d39\u4ecb\u3092\u8d85\u3048\u305f\u4fa1\u5024\u3092\u63d0\u4f9b\u3002</div></div>\n<div class="feature-card"><div class="feature-card__num">2</div><div class="feature-card__title">\u30aa\u30fc\u30c7\u30a3\u30a8\u30f3\u30b9\u30ed\u30a4\u30e3\u30eb\u30c6\u30a3</div><div class="feature-card__desc">\u30d5\u30a1\u30f3\u57fa\u76e4\u304c\u5f37\u304f\u3001\u53cd\u5fa9\u8cfc\u5165\u3068\u53e3\u30b3\u30df\u3092\u751f\u6210\u3002</div></div>\n<div class="feature-card"><div class="feature-card__num">3</div><div class="feature-card__title">\u30bd\u30fc\u30b7\u30e3\u30eb\u30b3\u30cd\u30af\u30b7\u30e7\u30f3</div><div class="feature-card__desc">\u30b7\u30a7\u30a2\u901a\u3058\u3066\u767a\u898b\u3002\u767a\u898b\u306e75%\u304c\u30b7\u30a7\u30a2\u304b\u3089\u6765\u307e\u3059\u3002</div></div>\n<div class="feature-card"><div class="feature-card__num">4</div><div class="feature-card__title">\u30ed\u30f3\u30b0\u30c6\u30fc\u30eb\u30a2\u30bb\u30c3\u30c8\u5024</div><div class="feature-card__desc">83%\u304c\u518d\u8a2a\u3002\u30b3\u30f3\u30c6\u30f3\u30c4\u306f\u9577\u671f\u7684\u306a\u30a2\u30bb\u30c3\u30c8\u3068\u3057\u3066\u6a5f\u80fd\u3057\u7d9a\u3051\u307e\u3059\u3002</div></div>\n</div>\n';
c = c.substring(0, creatorP1End) + featureGridHTML + c.substring(creatorP1End);

// 3. Remove <hr> tags
c = c.replace(/<hr\s*\/?>\s*/g, "");

// 4. Fix English footer labels
c = c.replace(">About TMG<", ">\u4f1a\u793e\u6982\u8981<");
c = c.replace(">Quick Links<", ">\u30af\u30a4\u30c3\u30af\u30ea\u30f3\u30af<");
c = c.replace(">Legal<", ">\u6cd5\u7684\u60c5\u5831<");

// 5. Fix English phrase in body
c = c.replace(" emotional resonance ", " \u611f\u60c5\u7684\u306a\u5171\u9cf4 ");

fs.writeFileSync(outPath, c, "utf8");
console.log("Written to: " + outPath);
console.log("callout: " + (/<div class="callout callout--accent">/.test(c) ? "PASS" : "FAIL"));
console.log("feature-grid: " + (/<div class="feature-grid">/.test(c) ? "PASS" : "FAIL"));
console.log("article-table: " + (/class="article-table">/.test(c) ? "PASS" : "FAIL"));
console.log("takeaway-banner: " + (/<div class="takeaway-banner">/.test(c) ? "PASS" : "FAIL"));
var hrCount = (c.match(/<hr/g) || []).length;
console.log("hr: " + hrCount);
console.log("About TMG: " + (c.includes("About TMG") ? "STILL" : "clean"));
console.log("emotional resonance: " + (c.includes("emotional resonance") ? "STILL" : "clean"));
