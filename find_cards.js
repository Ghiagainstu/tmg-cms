const fs = require("fs");
const c = fs.readFileSync(String.raw`C:\Users\fireh\WorkBuddy\20260326144402\tmg-website\ja\blog\index.html`, "utf8");

// Find actual card structure
const firstCard = c.indexOf('post-card');
if (firstCard > 0) {
  console.log("=== CARD STRUCTURE ===");
  console.log(c.substring(Math.max(0, firstCard - 100), firstCard + 500));
}

// Try different patterns
const patterns = [
  /class="post-card"/g,
  /class='post-card'/g,
  /class=post-card/g,
  /class="post-card\s/g,
];
for (const p of patterns) {
  const count = (c.match(p) || []).length;
  console.log("Pattern " + p.source + ": " + count);
}
