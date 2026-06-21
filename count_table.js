const fs = require("fs");
const c = fs.readFileSync(String.raw`D:\Codex\TMG\kuaishou_fixed.html`, "utf8");
var idx = 0;
var count = 0;
while ((idx = c.indexOf("[table]", idx)) !== -1) {
  count++;
  console.log("[table] #" + count + " at " + idx + ": ..." + c.substring(Math.max(0,idx-40), idx+40) + "...");
  idx++;
}
