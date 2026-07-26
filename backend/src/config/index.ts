import dotenv from "dotenv";
dotenv.config();

export const config = {
  port: parseInt(process.env.PORT || "3333", 10),
  databaseUrl: process.env.DATABASE_URL || "",
  frontendUrl: (process.env.FRONTEND_URL || "http://localhost:3000").replace(/\/+$/, ""),
  backendUrl: (process.env.BACKEND_URL || `http://localhost:${parseInt(process.env.PORT || "3333", 10)}`).replace(/\/+$/, ""),
  get jwtSecret(): string {
    const secret = process.env.JWT_SECRET;
    if (!secret) throw new Error("JWT_SECRET environment variable is required");
    return secret;
  },
  uploadDir: process.env.UPLOAD_DIR || "uploads",
};