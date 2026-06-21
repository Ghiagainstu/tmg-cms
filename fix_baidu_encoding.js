const fs = require("fs");
const filePath = "D:\\Codex\\TMG\\baidu-demographics_fixed.html";
let c = fs.readFileSync(filePath, "utf8");

// Fix garbled characters
const fixes = [
  ["\u9ad8\u610f\u6b3a", "\u9ad8\u610f\u56f3"],  // 高意欺 -> 高意図
  ["\u4e0d\u52d7\u7523", "\u4e0d\u52d7\u7523"],  // check
  ["\u30ea\u30b9\u30b1\u30a4\u30d4\u30f3\u30b0", "\u30ea\u30bf\u30fc\u30b2\u30c6\u30a3\u30f3\u30b0"],  // リスケイピング -> リターゲティング
];

for (const [from, to] of fixes) {
  if (c.includes(from)) {
    c = c.split(from).join(to);
    console.log("Fixed: " + from + " -> " + to);
  }
}

// Check for any remaining issues
const checkWords = ["\u610f\u6b3a", "\u52d7\u7523", "\u30b9\u30b1\u30a4\u30d4"];
for (const w of checkWords) {
  if (c.includes(w)) console.log("WARNING: still contains " + w);
}

fs.writeFileSync(filePath, c, "utf8");
console.log("Encoding fixes applied");
