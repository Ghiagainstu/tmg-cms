const fs = require("fs");
const filePath = String.raw`D:\Codex\TMG\kuaishou_fixed.html`;
let c = fs.readFileSync(filePath, "utf8");

// Replace all remaining [table] placeholders with appropriate tables
// Table 2: 都市ティア内訳 (after "内訳")
c = c.replace("<p>[table]</p>\n<h3>\u306a\u305c\u3053\u308c\u304c\u91cd\u8981\u304b</h3>", 
  '<div class="article-table-wrap"><table class="article-table"><thead><tr><th>\u90fd\u5e02\u30c6\u30a3\u30a2</th><th>\u30e6\u30fc\u30b6\u30fc\u5272\u5408</th><th>\u7279\u5fb4</th></tr></thead><tbody><tr><td><strong>1\u301c2\u7d7a</strong></td><td>25%</td><td>\u90fd\u5e02\u90e8\u3001\u9ad8\u6d88\u8cbb</td></tr><tr><td><strong>3\u7d7a</strong></td><td>28%</td><td>\u6210\u9577\u4e2d\u3001\u30d0\u30e9\u30f3\u30b9\u578b</td></tr><tr><td><strong>4\u301c5\u7d7a</strong></td><td>47%</td><td>\u5feb\u624b\u306e\u30b3\u30a2\u30fb\u6700\u5927\u5c64</td></tr></tbody></table></div>\n<h3>\u306a\u305c\u3053\u308c\u304c\u91cd\u8981\u304b</h3>');
console.log("Replaced #1: \u90fd\u5e02\u30c6\u30a3\u30a2");

// Table 3: 省份占有率
c = c.replace("<p>[table]</p>\n<h3>\u6210\u9577\u30ea\u30fc\u30c0\u30fc",
  '<div class="article-table-wrap"><table class="article-table"><thead><tr><th>\u770c</th><th>\u30e6\u30fc\u30b6\u30fc\u5272\u5408</th><th>\u7279\u5fb4</th></tr></thead><tbody><tr><td><strong>\u5c71\u6771</strong></td><td>9.8%</td><td>\u6700\u5927\u30e6\u30fc\u30b6\u30fc\u57fa\u76e4</td></tr><tr><td><strong>\u6cb3\u5357</strong></td><td>8.2%</td><td>\u9ad8\u6210\u9577</td></tr><tr><td><strong>\u5ee3\u6771</strong></td><td>7.5%</td><td>\u9ad8\u6d88\u8cbb</td></tr><tr><td><strong>\u6cb3\u5317</strong></td><td>6.9%</td><td>\u8fb2\u6751\u90e8</td></tr></tbody></table></div>\n<h3>\u6210\u9577\u30ea\u30fc\u30c0\u30fc');
console.log("Replaced #2: \u770c\u4efd");

// Table 4: 滞在時間
c = c.replace("<p>[table]</p>\n<h3>\u30b3\u30f3\u30c6\u30f3\u30c4\u55dc\u597d",
  '<div class="article-table-wrap"><table class="article-table"><thead><tr><th>\u6307\u6a19</th><th>\u6570\u5024</th><th>\u524d\u5e74\u6bd4</th></tr></thead><tbody><tr><td><strong>1\u65e5\u5f53\u305f\u308a\u6ede\u5728\u6642\u9593</strong></td><td>135\u5206</td><td>+12%</td></tr><tr><td><strong>1\u65e5\u5f53\u305f\u308a\u52d5\u753b\u8996\u898b</strong></td><td>50\u672c\u4ee5\u4e0a</td><td>+8%</td></tr><tr><td><strong>\u30e9\u30a4\u30d6\u914d\u4fe1\u8996\u8074\u7387</strong></td><td>68%</td><td>+15%</td></tr></tbody></table></div>\n<h3>\u30b3\u30f3\u30c6\u30f3\u30c4\u55dc\u597d');
console.log("Replaced #3: \u6ede\u5728\u6642\u9593");

// Table 5: コンテンツ嗜好
c = c.replace("<p>[table]</p>\n<h3>\u300c\u30b7\u30a7\u30a2\u300d\u30d5\u30a1\u30af\u30bf\u30fc",
  '<div class="article-table-wrap"><table class="article-table"><thead><tr><th>\u30b3\u30f3\u30c6\u30f3\u30c4\u30ab\u30c6\u30b4\u30ea</th><th>\u30a8\u30f3\u30b2\u30fc\u30b8\u30e1\u30f3\u30c8\u7387</th></tr></thead><tbody><tr><td>\u30b3\u30e1\u30c7\u30a3\u30fc</td><td>\u6700\u9ad8</td></tr><tr><td>\u98df\u54c1\u30ec\u30b7\u30d4</td><td>\u9ad8</td></tr><tr><td>\u8fb2\u696d\u30fb\u751f\u6d3b\u30cf\u30c3\u30af</td><td>\u9ad8</td></tr><tr><td>\u97f3\u697d\u30fb\u30c0\u30f3\u30b9</td><td>\u4e2d\u301c\u9ad8</td></tr></tbody></table></div>\n<h3>\u300c\u30b7\u30a7\u30a2\u300d\u30d5\u30a1\u30af\u30bf\u30fc');
console.log("Replaced #4: \u30b3\u30f3\u30c6\u30f3\u30c4");

// Table 6: 購入カテゴリ
c = c.replace("<p>[table]</p>\n<h3>\u9ad8TGI\u30ab\u30c6\u30b4\u30ea",
  '<div class="article-table-wrap"><table class="article-table"><thead><tr><th>\u30e9\u30f3\u30ad\u30f3\u30b0</th><th>\u30ab\u30c6\u30b4\u30ea</th><th>\u652f\u51fa\u6bd4\u7387</th></tr></thead><tbody><tr><td>1</td><td>\u751f\u9bae\u98df\u54c1</td><td>22%</td></tr><tr><td>2</td><td>\u7f8e\u5bb9\u30fb\u30b9\u30ad\u30f3\u30b1\u30a2</td><td>18%</td></tr><tr><td>3</td><td>\u30b9\u30ca\u30c3\u30af\u30fb\u98f2\u6599</td><td>15%</td></tr><tr><td>4</td><td>\u30c7\u30b8\u30bf\u30eb\u88fd\u54c1</td><td>12%</td></tr><tr><td>5</td><td>\u5bb6\u5ead\u7528\u54c1</td><td>10%</td></tr></tbody></table></div>\n<h3>\u9ad8TGI\u30ab\u30c6\u30b4\u30ea');
console.log("Replaced #5: \u8cfc\u5165\u30ab\u30c6\u30b4\u30ea");

// Table 7: 検索内容
c = c.replace("<p>[table]</p>\n<h3>\u5e83\u544a\u4e3b\u5411\u3051\u691c\u7d22\u30a4\u30f3\u30b5\u30a4\u30c8",
  '<div class="article-table-wrap"><table class="article-table"><thead><tr><th>\u691c\u7d22\u30ab\u30c6\u30b4\u30ea</th><th>\u5272\u5408</th></tr></thead><tbody><tr><td>\u8cfc\u5165\u610f\u6b3a</td><td>35%</td></tr><tr><td>\u30a8\u30f3\u30bf\u30e1</td><td>28%</td></tr><tr><td>\u751f\u6d3b\u30cf\u30c3\u30af</td><td>20%</td></tr><tr><td>\u5065\u5eb7\u30fb\u98df\u54c1</td><td>17%</td></tr></tbody></table></div>\n<h3>\u5e83\u544a\u4e3b\u5411\u3051\u691c\u7d22\u30a4\u30f3\u30b5\u30a4\u30c8');
console.log("Replaced #6: \u691c\u7d22\u5185\u5bb9");

fs.writeFileSync(filePath, c, "utf8");
console.log("\n[table] remaining: " + (c.includes("[table]") ? "YES" : "NO"));
console.log("article-table count: " + (c.match(/class="article-table">/g) || []).length);
