const fs = require("fs");
const filePath = String.raw`D:\Codex\TMG\baidu-demographics_fixed.html`;
let c = fs.readFileSync(filePath, "utf8");

// Find 不動産 and check each character
const idx = c.indexOf("\u4e0d");
const nearby = c.substring(idx, idx + 5);
for (let i = 0; i < nearby.length; i++) {
  console.log("Char " + i + ": U+" + nearby.charCodeAt(i).toString(16).toUpperCase() + " = " + nearby[i]);
}

// The correct 不動産 is U+4E0D U+52D7 U+7523
// Let's check if U+52D7 is correct
// Actually 動 is U+52D5, not U+52D7
// U+52D7 is 勗
console.log("\nExpected: 不動産");
console.log("動 = U+" + "\u52d5".charCodeAt(0).toString(16));
console.log("Current middle char = U+" + nearby.charCodeAt(1).toString(16));

// Fix: replace the wrong char
c = c.replace("\u4e0d\u52d7\u7523", "\u4e0d\u52d5\u7523");
fs.writeFileSync(filePath, c, "utf8");

// Verify
const c2 = fs.readFileSync(filePath, "utf8");
const idx2 = c2.indexOf("\u4e0d");
const nearby2 = c2.substring(idx2, idx2 + 3);
console.log("After fix: " + nearby2);
for (let i = 0; i < nearby2.length; i++) {
  console.log("Char " + i + ": U+" + nearby2.charCodeAt(i).toString(16).toUpperCase() + " = " + nearby2[i]);
}
