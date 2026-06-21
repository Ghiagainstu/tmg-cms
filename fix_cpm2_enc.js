const fs = require("fs");
const filePath = String.raw`D:\Codex\TMG\cpm-ocpm-ecpm_fixed.html`;
let c = fs.readFileSync(filePath, "utf8");

// Fix encoding issues
c = c.split("\u652f\u6257\u3046").join("\u652f\u6255\u3046"); // 支扗う -> 支払う
c = c.split("\u8a70\u307e\u308a\u5148").join("\u8a70\u307e\u308a\u5148"); // check

// Check what 詰まり先 actually is
const idx = c.indexOf("\u8a70\u307e\u308a\u5148");
if (idx >= 0) {
  const nearby = c.substring(idx, idx + 6);
  for (let i = 0; i < nearby.length; i++) {
    console.log("Char " + i + ": U+" + nearby.charCodeAt(i).toString(16).toUpperCase() + " = " + nearby[i]);
  }
}
// 詰まり先 is wrong - should be 詰まり先... actually the correct word is 行き先 or 宛先
// In context: "who benefits" - should be 受益者 or 対象
c = c.split("\u8a70\u307e\u308a\u5148").join("\u5b9b\u5148"); // 宛先

fs.writeFileSync(filePath, c, "utf8");

const c2 = fs.readFileSync(filePath, "utf8");
console.log("\u652f\u6257 remaining: " + c2.includes("\u652f\u6257"));
console.log("\u652f\u6255 present: " + c2.includes("\u652f\u6255"));
console.log("\u5b9b\u5148 present: " + c2.includes("\u5b9b\u5148"));
