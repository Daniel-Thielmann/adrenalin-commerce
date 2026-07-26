import { SignJWT } from "jose";
import * as userRepo from "../repositories/users";
import { config } from "../config";

const ADMIN_EMAIL = "admin@adrenalin.com";
const secret = new TextEncoder().encode(config.jwtSecret);

function resolveRole(email: string, _currentRole: string): string {
  return email === ADMIN_EMAIL ? "admin" : "user";
}

export async function findOrCreateUser(profile: { googleId: string; email: string; name: string }) {
  let user = await userRepo.findByGoogleId(profile.googleId);

  if (user) {
    const role = resolveRole(user.email, user.role);
    const token = await generateToken(user.id, user.email, role);
    return { token, user: { id: user.id, email: user.email, name: user.name, role } };
  }

  user = await userRepo.findByEmail(profile.email);

  if (user) {
    await userRepo.updateGoogleId(user.id, profile.googleId);
    const role = resolveRole(user.email, user.role);
    const token = await generateToken(user.id, user.email, role);
    return { token, user: { id: user.id, email: user.email, name: user.name, role } };
  }

  const role = resolveRole(profile.email, "user");

  user = await userRepo.create({
    email: profile.email,
    name: profile.name,
    googleId: profile.googleId,
    role,
  });

  const token = await generateToken(user.id, user.email, role);
  return { token, user: { id: user.id, email: user.email, name: user.name, role } };
}

async function generateToken(id: number, email: string, role: string) {
  return new SignJWT({ id, email, role })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secret);
}
