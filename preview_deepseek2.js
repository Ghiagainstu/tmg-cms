const fs = require("fs");
const c = fs.readFileSync(String.raw`D:\Codex\TMG\deepseek-v4_fixed2.html`, "utf8");

// Show article start
const artStart = c.indexOf("<article");
console.log("=== ARTICLE START (first 1500) ===");
console.log(c.substring(artStart, artStart + 1500));

// Show article end
const artEnd = c.indexOf("</article>");
console.log("\n=== ARTICLE END (last 500) ===");
console.log(c.substring(Math.max(0, artEnd - 500), artEnd));
