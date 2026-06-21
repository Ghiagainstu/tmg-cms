const fs = require("fs");
const c = fs.readFileSync(String.raw`D:\Codex\TMG\kuaishou_fixed.html`, "utf8");
var idx = 0;
while ((idx = c.indexOf("[table]", idx)) !== -1) {
  console.log("At " + idx + ": ..." + c.substring(Math.max(0,idx-60), idx+60).replace(/\n/g,"\\n") + "...");
  idx++;
}
