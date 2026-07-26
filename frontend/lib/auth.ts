import { jwtVerify } from "jose"

function getSecret(): Uint8Array {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error("JWT_SECRET environment variable is required");
  return new TextEncoder().encode(secret);
}

export async function verifyToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, getSecret())
    return payload as { id: number; email: string; role: string }
  } catch {
    return null
  }
}