const fs = require("fs");
const filePath = String.raw`D:\Codex\TMG\cpm-ocpm-ecpm_fixed.html`;
let c = fs.readFileSync(filePath, "utf8");
c = c.split("\u5b9b\u5148").join("\u4e3b\u5c0e\u6a29"); // 宛先 -> 主導権
fs.writeFileSync(filePath, c, "utf8");
console.log("Fixed: 宛先 -> 主導権");
// Verify
const c2 = fs.readFileSync(filePath, "utf8");
console.log("主導権: " + (c2.includes("\u4e3b\u5c0e\u6a29") ? "present" : "missing"));
