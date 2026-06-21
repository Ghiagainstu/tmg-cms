const fs = require("fs");
const deployed = fs.readFileSync(String.raw`C:\Users\fireh\WorkBuddy\20260326144402\tmg-website\ja\blog\deepseek-v4-price-cut-geo.html`, "utf8");
const local = fs.readFileSync(String.raw`D:\Codex\TMG\deepseek-v4_fixed3.html`, "utf8");

console.log("Deployed size: " + deployed.length);
console.log("Local size: " + local.length);
console.log("Files match: " + (deployed === local));

// Check deployed for English H1
console.log("\nDeployed has English H1: " + (deployed.includes("DeepSeek V4 Cuts") ? "YES" : "NO"));
console.log("Deployed has YAML: " + (deployed.includes("category: TMG-Blog") ? "YES" : "NO"));
console.log("Deployed has <hr>: " + (deployed.match(/<hr/g) || []).length);

// Show first 500 chars of deployed article
const artStart = deployed.indexOf("<article");
console.log("\n=== DEPLOYED ARTICLE START ===");
console.log(deployed.substring(artStart, artStart + 500));
