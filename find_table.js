const fs = require("fs");
const c = fs.readFileSync(String.raw`D:\Codex\TMG\kuaishou_fixed.html`, "utf8");
var idx = c.indexOf("[table]");
if (idx >= 0) {
  console.log("Remaining [table] at " + idx);
  console.log("Context: " + c.substring(Math.max(0,idx-80), idx+80));
}
