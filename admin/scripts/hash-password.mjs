// Password Hash Generator for TMG CMS
// Usage: node scripts/hash-password.mjs <your-password>
// Example: node scripts/hash-password.mjs mySecurePassword123

import bcrypt from "bcryptjs";

const password = process.argv[2];

if (!password) {
  console.log("Usage: node scripts/hash-password.mjs <password>");
  console.log("Example: node scripts/hash-password.mjs mySecurePassword123");
  process.exit(1);
}

const hash = await bcrypt.hash(password, 12);

console.log("");
console.log("Password hash generated:");
console.log("========================");
console.log(hash);
console.log("");
console.log("Set this as environment variable in Vercel:");
console.log("ADMIN_PASSWORD_HASH=" + hash);
console.log("");
console.log("Or add to .env.local:");
console.log("ADMIN_PASSWORD_HASH=" + hash);
console.log("");
