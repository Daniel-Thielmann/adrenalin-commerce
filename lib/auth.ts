import { SignJWT, jwtVerify } from "jose"

const secret = new TextEncoder().encode(
  process.env.JWT_SECRET || "adrenalin-secret-key-change-in-production"
)

export async function createToken(payload: { id: number; email: string; role: string }) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("7d")
    .sign(secret)
}

export async function verifyToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, secret)
    return payload as { id: number; email: string; role: string }
  } catch {
    return null
  }
}