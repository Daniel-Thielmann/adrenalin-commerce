import bcrypt from "bcryptjs";
import { SignJWT } from "jose";
import * as userRepo from "../repositories/users";
import { AppError } from "../middlewares/errorHandler";
import { config } from "../config";

const secret = new TextEncoder().encode(config.jwtSecret);

export async function login(email: string, password: string) {
  const user = await userRepo.findByEmail(email);
  if (!user) throw new AppError("Email ou senha inválidos", 401);

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) throw new AppError("Email ou senha inválidos", 401);

  const token = await new SignJWT({ id: user.id, email: user.email, role: user.role })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secret);

  return {
    token,
    user: { id: user.id, email: user.email, name: user.name, role: user.role },
  };
}

export async function getProfile(userId: number) {
  const user = await userRepo.findById(userId);
  if (!user) throw new AppError("Usuário não encontrado", 404);
  return { id: user.id, email: user.email, name: user.name, role: user.role };
}