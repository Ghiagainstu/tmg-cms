const fs = require("fs");
const c = fs.readFileSync("D:\\Codex\\TMG\\ad-billing-models-explained_fixed.html", "utf8");
// Find all instances of 支扗
let idx = 0;
while ((idx = c.indexOf("\u652f\u6257", idx)) !== -1) {
  console.log("Found \u652f\u6257 at " + idx + ": ..." + c.substring(Math.max(0,idx-5), idx+15) + "...");
  idx++;
}
// Find all instances of 誐
idx = 0;
while ((idx = c.indexOf("\u8a90", idx)) !== -1) {
  console.log("Found \u8a90 at " + idx + ": ..." + c.substring(Math.max(0,idx-5), idx+15) + "...");
  idx++;
}
// Check for 詐欺
console.log("\n\u8a90\u6b3a count: " + (c.match(/\u8a90\u6b3a/g) || []).length);
console.log("\u8a70\u6b3a count: " + (c.match(/\u8a70\u6b3a/g) || []).length);
