const fs = require("fs");
const filePath = String.raw`D:\Codex\TMG\cpm-is-rising-bad_fixed.html`;
let c = fs.readFileSync(filePath, "utf8");

// Fix English words in body
c = c.replace(" decent \u306b\u898b\u3048\u307e\u3057\u305f", " \u554f\u984c\u306a\u304f\u898b\u3048\u307e\u3057\u305f");
c = c.replace(" killing \u3055\u308c\u308b\u65b9\u6cd5\u3067\u3059", " \u7d42\u4e86\u3055\u308c\u308b\u65b9\u6cd5\u3067\u3059");

fs.writeFileSync(filePath, c, "utf8");

// Verify
const c2 = fs.readFileSync(filePath, "utf8");
console.log("decent: " + (c2.includes("decent") ? "STILL THERE" : "clean"));
console.log("killing: " + (c2.includes("killing") ? "STILL THERE" : "clean"));
