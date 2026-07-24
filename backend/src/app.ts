import express from "express";
import cors from "cors";
import { config } from "./config";
import { errorHandler } from "./middlewares/errorHandler";
import { authRoutes } from "./routes/auth";
import { productRoutes } from "./routes/products";
import { categoryRoutes } from "./routes/categories";
import { memberRoutes } from "./routes/members";
import { searchRoutes } from "./routes/search";
import { homeRoutes } from "./routes/home";
import path from "path";

export function createApp() {
  const app = express();

  app.use(cors({
    origin: config.frontendUrl,
    credentials: true,
  }));

  app.use(express.json());

  app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));

  app.use("/api/auth", authRoutes);
  app.use("/api/products", productRoutes);
  app.use("/api/categories", categoryRoutes);
  app.use("/api/members", memberRoutes);
  app.use("/api/search", searchRoutes);
  app.use("/api/home", homeRoutes);

  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok" });
  });

  app.use(errorHandler);

  return app;
}