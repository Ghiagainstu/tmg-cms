const fs = require("fs");
const filePath = String.raw`D:\Codex\TMG\baidu-demographics_fixed.html`;
let c = fs.readFileSync(filePath, "utf8");

// Find the problematic table cell with B2B
const marker = "B2B";
const markerIdx = c.indexOf(marker);
if (markerIdx >= 0) {
  const endTd = c.indexOf("</td>", markerIdx);
  const current = c.substring(markerIdx, endTd);
  console.log("Current cell: " + current);
  
  // Replace with correct text
  const correct = "B2B\u3001\u8eca\u3001\u4fdd\u967a\u3001\u4e0d\u52d7\u7523";
  c = c.substring(0, markerIdx) + correct + c.substring(endTd);
  console.log("Replaced with: " + correct);
}

fs.writeFileSync(filePath, c, "utf8");
console.log("Done");
