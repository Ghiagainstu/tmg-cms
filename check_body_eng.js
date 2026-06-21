const fs = require("fs");
const c = fs.readFileSync("D:\\Codex\\TMG\\ad-billing-models-explained_fixed.html", "utf8");
const engWords = ["significantly", "massive", "uniquely", "Leveraging"];
for (const w of engWords) {
  const count = (c.match(new RegExp(w, "gi")) || []).length;
  if (count > 0) console.log(w + ": " + count + " occurrences");
}
// Also check existing callout--info is still there
console.log("callout--info: " + (/callout--info/.test(c) ? "present" : "missing"));
console.log("callout--tip: " + (/callout--tip/.test(c) ? "present" : "missing"));
