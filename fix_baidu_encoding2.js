const fs = require("fs");
const filePath = "D:\\Codex\\TMG\\baidu-demographics_fixed.html";
let c = fs.readFileSync(filePath, "utf8");

// Find the exact garbled text around 不動産
const idx = c.indexOf("\u52d7\u7523");
if (idx > 0) {
  console.log("Context: " + c.substring(Math.max(0, idx-10), idx+10));
}

// Try to fix - the character after 不 should be 動
c = c.replace("\u4e0d\u52d7\u7523", "\u4e0d\u52d7\u7523");  // this won't help
// Let me just search for the table row and fix it
const tableIdx = c.indexOf("B2B");
const tableRow = c.substring(tableIdx - 5, tableIdx + 200);
console.log("Table row context: " + tableRow);
