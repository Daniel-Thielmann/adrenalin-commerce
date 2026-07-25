import { SignJWT } from "jose";
import * as userRepo from "../repositories/users";
import { config } from "../config";

const secret = new TextEncoder().encode(config.jwtSecret);

export async function findOrCreateUser(profile: { googleId: string; email: string; name: string }) {
  let user = await userRepo.findByGoogleId(profile.googleId);

  if (user) {
    const token = await generateToken(user.id, user.email, user.role);
    return { token, user: { id: user.id, email: user.email, name: user.name, role: user.role } };
  }

  user = await userRepo.findByEmail(profile.email);

  if (user) {
    await userRepo.updateGoogleId(user.id, profile.googleId);
    const token = await generateToken(user.id, user.email, user.role);
    return { token, user: { id: user.id, email: user.email, name: user.name, role: user.role } };
  }

  user = await userRepo.create({
    email: profile.email,
    name: profile.name,
    googleId: profile.googleId,
  });

  const token = await generateToken(user.id, user.email, user.role);
  return { token, user: { id: user.id, email: user.email, name: user.name, role: user.role } };
}

async function generateToken(id: number, email: string, role: string) {
  return new SignJWT({ id, email, role })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secret);
}
