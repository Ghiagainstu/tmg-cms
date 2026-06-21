const fs = require("fs");
const filePath = String.raw`D:\Codex\TMG\cpm-ocpm-ecpm_fixed.html`;
let c = fs.readFileSync(filePath, "utf8");
// Find the table row context
const idx = c.indexOf("\u5b9b\u5148");
const rowStart = c.lastIndexOf("<tr>", idx);
const rowEnd = c.indexOf("</tr>", idx) + 5;
console.log("Row: " + c.substring(rowStart, rowEnd));
