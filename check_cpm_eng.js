const fs = require("fs");
const c = fs.readFileSync(String.raw`D:\Codex\TMG\cpm-is-rising-bad_fixed.html`, "utf8");
// Check for English words in article body
const engInBody = ["decent", "killing"];
for (const w of engInBody) {
  if (c.includes(w)) {
    const idx = c.indexOf(w);
    console.log(w + " found at " + idx + ": ..." + c.substring(Math.max(0,idx-30), idx+30) + "...");
  }
}
// Also check "処" usage
const shori = c.match(/\u51e6/g);
if (shori) console.log("\u51e6 occurrences: " + shori.length);
