import dotenv from "dotenv";
dotenv.config();

export const config = {
  port: parseInt(process.env.PORT || "3333", 10),
  databaseUrl: process.env.DATABASE_URL || "",
  frontendUrl: (process.env.FRONTEND_URL || "http://localhost:3000").replace(/\/+$/, ""),
  jwtSecret: process.env.JWT_SECRET || "adrenalin-secret-key-change-in-production",
  uploadDir: process.env.UPLOAD_DIR || "uploads",
};