import { Request, Response, NextFunction } from "express";
import { jwtVerify } from "jose";
import { config } from "../config";

const secret = new TextEncoder().encode(config.jwtSecret);

export interface AuthPayload {
  id: number;
  email: string;
  role: string;
}

declare global {
  namespace Express {
    interface Request {
      authUser?: AuthPayload;
    }
  }
}

export async function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Token não fornecido" });
  }

  const token = authHeader.split(" ")[1];
  try {
    const { payload } = await jwtVerify(token, secret);
    req.authUser = payload as unknown as AuthPayload;
    next();
  } catch {
    return res.status(401).json({ error: "Token inválido ou expirado" });
  }
}