const fs = require("fs");
const filePath = "D:\\Codex\\TMG\\ad-billing-models-explained_fixed.html";
let c = fs.readFileSync(filePath, "utf8");
// Fix garbled characters
c = c.replace(/\u652f\u6257\u3046/g, "\u652f\u6255\u3046");
c = c.replace(/\u652f\u6257\u3044/g, "\u652f\u6255\u3044");
c = c.replace(/\u8a90\u6b3a/g, "\u8a70\u6b3a");
fs.writeFileSync(filePath, c, "utf8");
// Verify
const check = fs.readFileSync(filePath, "utf8");
console.log("\u652f\u6257 remaining: " + check.includes("\u652f\u6257"));
console.log("\u8a90 remaining: " + check.includes("\u8a90"));
console.log("\u652f\u6255\u3044 present: " + check.includes("\u652f\u6255\u3044"));
console.log("\u8a70\u6b3a present: " + check.includes("\u8a70\u6b3a"));
