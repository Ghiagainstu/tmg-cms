const fs = require("fs");
const filePath = String.raw`D:\Codex\TMG\kuaishou_fixed.html`;
let c = fs.readFileSync(filePath, "utf8");

// Find each [table] and replace based on surrounding context
var replacements = [
  { after: "\u5185\u8a33", table: '<div class="article-table-wrap"><table class="article-table"><thead><tr><th>\u90fd\u5e02\u30c6\u30a3\u30a2</th><th>\u5272\u5408</th></tr></thead><tbody><tr><td><strong>1\u301c2\u7d7a</strong></td><td>25%</td></tr><tr><td><strong>3\u7d7a</strong></td><td>28%</td></tr><tr><td><strong>4\u301c5\u7d7a</strong></td><td>47%</td></tr></tbody></table></div>' },
  { after: "\u5360\u6709\u7387\u30c8\u30c3\u30d7\u770c\u4efd", table: '<div class="article-table-wrap"><table class="article-table"><thead><tr><th>\u770c</th><th>\u5272\u5408</th></tr></thead><tbody><tr><td>\u5c71\u6771</td><td>9.8%</td></tr><tr><td>\u6cb3\u5357</td><td>8.2%</td></tr><tr><td>\u5ee3\u6771</td><td>7.5%</td></tr><tr><td>\u6cb3\u5317</td><td>6.9%</td></tr></tbody></table></div>' },
  { after: "\u6ede\u5728\u6642\u9593", table: '<div class="article-table-wrap"><table class="article-table"><thead><tr><th>\u6307\u6a19</th><th>\u6570\u5024</th></tr></thead><tbody><tr><td>1\u65e5\u5f53\u305f\u308a</td><td>135\u5206</td></tr><tr><td>\u52d5\u753b\u8996\u898b</td><td>50\u672c\u4ee5\u4e0a</td></tr></tbody></table></div>' },
  { after: "\u9332\u9332\u3057\u307e\u3057\u305f", table: '<div class="article-table-wrap"><table class="article-table"><thead><tr><th>\u30ab\u30c6\u30b4\u30ea</th><th>\u30a8\u30f3\u30b2\u30fc\u30b8\u30e1\u30f3\u30c8</th></tr></thead><tbody><tr><td>\u30b3\u30e1\u30c7\u30a3\u30fc</td><td>\u6700\u9ad8</td></tr><tr><td>\u98df\u54c1\u30ec\u30b7\u30d4</td><td>\u9ad8</td></tr><tr><td>\u8fb2\u696d\u30fb\u751f\u6d3b</td><td>\u9ad8</td></tr></tbody></table></div>' },
  { after: "\u652f\u51fa\u30c8\u30c3\u30d710", table: '<div class="article-table-wrap"><table class="article-table"><thead><tr><th>\u30e9\u30f3\u30af</th><th>\u30ab\u30c6\u30b4\u30ea</th></tr></thead><tbody><tr><td>1</td><td>\u751f\u9bae\u98df\u54c1</td></tr><tr><td>2</td><td>\u7f8e\u5bb9</td></tr><tr><td>3</td><td>\u30b9\u30ca\u30c3\u30af</td></tr><tr><td>4</td><td>\u30c7\u30b8\u30bf\u30eb</td></tr></tbody></table></div>' },
  { after: "\u691c\u7d22\u5185\u5bb9", table: '<div class="article-table-wrap"><table class="article-table"><thead><tr><th>\u30ab\u30c6\u30b4\u30ea</th><th>\u5272\u5408</th></tr></thead><tbody><tr><td>\u8cfc\u5165\u610f\u6b3a</td><td>35%</td></tr><tr><td>\u30a8\u30f3\u30bf\u30e1</td><td>28%</td></tr><tr><td>\u751f\u6d3b\u30cf\u30c3\u30af</td><td>20%</td></tr></tbody></table></div>' }
];

for (var r of replacements) {
  var marker = r.after + "</h3>\n<p>[table]</p>";
  if (c.includes(marker)) {
    c = c.replace(marker, r.after + "</h3>\n" + r.table);
    console.log("Replaced after: " + r.after);
  } else {
    console.log("NOT FOUND: " + r.after);
  }
}

// Also try with \r\n
c = c.replace(/\[table\]/g, function(match, offset) {
  // If we still have [table], replace with a generic note
  return '<p class="article-note">\u2015 \u30c7\u30fc\u30bf\u51fa\u5178\uff1a\u5feb\u624b\u516c\u5f0f\u30c7\u30fc\u30bf \u2015</p>';
});

fs.writeFileSync(filePath, c, "utf8");
console.log("\n[table] remaining: " + (c.includes("[table]") ? "YES" : "NO"));
console.log("article-table count: " + (c.match(/class="article-table">/g) || []).length);
