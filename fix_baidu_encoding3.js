const fs = require("fs");
const filePath = "D:\\Codex\TMG\\baidu-demographics_fixed.html";
let c = fs.readFileSync(filePath, "utf8");

// The character 勗 (U+52D7) should be 動 (U+52D7) - actually they might be the same
// Let me check the actual bytes
const idx = c.indexOf("\u4e0d\u52d7\u7523");
if (idx >= 0) {
  const charCode = c.charCodeAt(idx + 1);
  console.log("Char code of suspect: " + charCode.toString(16));
  // U+52D7 is 動, U+52D7 is actually 動... let me check
  console.log("Character: " + c.charAt(idx + 1));
  // Actually 不勗産 - the middle char is 勗 (U+5297)? Let me check
}

// Just do a direct string replacement
c = c.replace("B2B\u3001\u8eca\u3001\u4fdd\u967a\u3001\u4e0d\u52d7\u7523", "B2B\u3001\u8eca\u3001\u4fdd\u967a\u3001\u4e0d\u52d7\u7523");
// Hmm, let me just write the correct text directly
// The issue is in the table - let me find and replace the exact string
const searchStr = "B2B\u3001\u8eca\u3001\u4fdd\u967a\u3001\u4e0d";
const replaceIdx = c.indexOf(searchStr);
if (replaceIdx >= 0) {
  // Replace from this point to the next </td>
  const endTd = c.indexOf("</td>", replaceIdx);
  const correct = "B2B\u3001\u8eca\u3001\u4fdd\u967a\u3001\u4e0d\u52d7\u7523";
  c = c.substring(0, replaceIdx) + correct + c.substring(endTd);
  console.log("Replaced table cell");
}

fs.writeFileSync(filePath, c, "utf8");
console.log("Done");
