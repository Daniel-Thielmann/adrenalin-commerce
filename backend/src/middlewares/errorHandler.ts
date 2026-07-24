import { Request, Response, NextFunction } from "express";

export class AppError extends Error {
  statusCode: number;
  constructor(message: string, statusCode: number = 400) {
    super(message);
    this.statusCode = statusCode;
  }
}

export function errorHandler(err: Error, _req: Request, res: Response, _next: NextFunction) {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ error: err.message });
  }

  if ((err as any).code === "P2025") {
    return res.status(404).json({ error: "Registro não encontrado" });
  }

  console.error("Unhandled error:", err);
  return res.status(500).json({ error: "Erro interno do servidor" });
}