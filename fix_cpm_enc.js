const fs = require("fs");
const filePath = String.raw`D:\Codex\TMG\cpm-is-rising-bad_fixed.html`;
let c = fs.readFileSync(filePath, "utf8");

// Fix garbled characters
const fixes = [
  ["\u9ad8\u610f\u6b3a", "\u9ad8\u610f\u56f3"],  // 高意欺 -> 高意図
  ["\u6a2a\u6253\u3044", "\u6a2a\u6253\u3044"],  // check actual chars
];

// Check what we have
const idx1 = c.indexOf("\u6a2a");
if (idx1 >= 0) {
  const nearby = c.substring(idx1, idx1 + 5);
  for (let i = 0; i < nearby.length; i++) {
    console.log("Char " + i + ": U+" + nearby.charCodeAt(i).toString(16).toUpperCase() + " = " + nearby[i]);
  }
}

// The correct 横ばい uses ば (U+3070) not 打 (U+6253)
// Fix: 横打い -> 横ばい
c = c.split("\u6a2a\u6253\u3044").join("\u6a2a\u3070\u3044");
c = c.split("\u9ad8\u610f\u6b3a").join("\u9ad8\u610f\u56f3");
// Also fix 処 -> 場合 where it means "case"
c = c.split("\u60aa\u3044\u51e6").join("\u60aa\u3044\u5834\u5408");
c = c.split("\u826f\u3044\u51e6").join("\u826f\u3044\u5834\u5408");

fs.writeFileSync(filePath, c, "utf8");

// Verify
const c2 = fs.readFileSync(filePath, "utf8");
console.log("\u9ad8\u610f\u56f3 present: " + c2.includes("\u9ad8\u610f\u56f3"));
console.log("\u6a2a\u3070\u3044 present: " + c2.includes("\u6a2a\u3070\u3044"));
console.log("\u9ad8\u610f\u6b3a remaining: " + c2.includes("\u9ad8\u610f\u6b3a"));
console.log("\u6a2a\u6253\u3044 remaining: " + c2.includes("\u6a2a\u6253\u3044"));
console.log("Encoding fixes applied");
