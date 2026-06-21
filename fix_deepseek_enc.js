const fs = require("fs");
const filePath = String.raw`D:\Codex\TMG\deepseek-v4_fixed.html`;
let c = fs.readFileSync(filePath, "utf8");

// Fix encoding issues
c = c.split("\u6025\u589e").join("\u6025\u589e"); // check if same
c = c.split("\u6025\u6fe1").join("\u6025\u589e"); // 急濡 -> 急増
c = c.split("\u5ec3\u306b\u3064\u304d").join("\u308f\u305a\u304b"); // 廃につき -> わずか

fs.writeFileSync(filePath, c, "utf8");

const c2 = fs.readFileSync(filePath, "utf8");
console.log("急増: " + (c2.includes("\u6025\u589e") ? "present" : "missing"));
console.log("急濡 remaining: " + (c2.includes("\u6025\u6fe1") ? "YES" : "clean"));
console.log("わずか: " + (c2.includes("\u308f\u305a\u304b") ? "present" : "missing"));
console.log("廃に remaining: " + (c2.includes("\u5ec3\u306b") ? "YES" : "clean"));
