const fs = require("fs");
const filePath = "D:\\Codex\\TMG\\ad-billing-models-explained_fixed.html";
let c = fs.readFileSync(filePath, "utf8");
// Fix the garbled character
c = c.replace("支扗いタイミング", "支払いタイミング");
fs.writeFileSync(filePath, c, "utf8");
console.log("Fixed encoding issue");
