const fs = require("fs");
const c = fs.readFileSync("C:\\Users\\fireh\\WorkBuddy\\20260326144402\\tmg-website\\ja\\blog\\ad-billing-models-explained.html", "utf8");

// Get sidebar content
const sidebarStart = c.indexOf("<!-- Sidebar -->");
const footerStart = c.indexOf("<!-- Footer -->");
console.log("=== SIDEBAR ===");
console.log(c.substring(sidebarStart, footerStart));
