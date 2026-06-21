const fs = require("fs");
const filePath = String.raw`D:\Codex\TMG\kuaishou_fixed.html`;
let c = fs.readFileSync(filePath, "utf8");

// Replace the remaining [table] after "内訳"
c = c.replace('<p>[table]</p>\n<h3>\u306a\u305c\u3053\u308c\u304c\u91cd\u8981\u304b</h3>',
  '<div class="article-table-wrap"><table class="article-table"><thead><tr><th>\u90fd\u5e02\u30c6\u30a3\u30a2</th><th>\u30e6\u30fc\u30b6\u30fc\u5272\u5408</th><th>\u7279\u5fb4</th></tr></thead><tbody><tr><td><strong>1\u301c2\u7d7a</strong></td><td>25%</td><td>\u90fd\u5e02\u90e8\u3001\u9ad8\u6d88\u8cbb</td></tr><tr><td><strong>3\u7d7a</strong></td><td>28%</td><td>\u6210\u9577\u4e2d</td></tr><tr><td><strong>4\u301c5\u7d7a</strong></td><td>47%</td><td>\u5feb\u624b\u306e\u30b3\u30a2</td></tr></tbody></table></div>\n<h3>\u306a\u305c\u3053\u308c\u304c\u91cd\u8981\u304b</h3>');
console.log("Replaced last [table]");

fs.writeFileSync(filePath, c, "utf8");
console.log("[table] remaining: " + (c.includes("[table]") ? "YES" : "NO"));
