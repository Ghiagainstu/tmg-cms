import bcrypt from "bcryptjs";

// Password hashing
const SALT_ROUNDS = 12;

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, SALT_ROUNDS);
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

// Token management (in-memory store, resets on server restart)
const activeTokens = new Map<string, { username: string; created: number }>();
const TOKEN_EXPIRY = 172800 * 1000; // 48 hours in ms

export function createToken(username: string): string {
  // Use bcrypt-compatible random bytes (no Node crypto needed)
  const array = new Uint8Array(32);
  for (let i = 0; i < 32; i++) {
    array[i] = Math.floor(Math.random() * 256);
  }
  const token = Array.from(array).map(b => b.toString(16).padStart(2, "0")).join("");
  activeTokens.set(token, { username, created: Date.now() });
  return token;
}

export function validateToken(token: string): string | null {
  const entry = activeTokens.get(token);
  if (!entry) return null;
  if (Date.now() - entry.created > TOKEN_EXPIRY) {
    activeTokens.delete(token);
    return null;
  }
  return entry.username;
}

export function deleteToken(token: string): void {
  activeTokens.delete(token);
}

// Default admin credentials (only used for initial setup)
export function getDefaultAdmin() {
  return {
    username: process.env.ADMIN_USERNAME || "admin",
    passwordHash: process.env.ADMIN_PASSWORD_HASH || "",
    passwordPlain: process.env.ADMIN_PASSWORD || "",
  };
}
