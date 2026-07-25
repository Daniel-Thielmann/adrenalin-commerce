import { Router } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { login } from "../services/auth";
import { authMiddleware } from "../middlewares/auth";
import { getProfile } from "../services/auth";

export const authRoutes = Router();

authRoutes.post(
  "/login",
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ error: "Email e senha são obrigatórios" });
      return;
    }
    const result = await login(email, password);
    res.json(result);
  })
);

authRoutes.get(
  "/me",
  authMiddleware,
  asyncHandler(async (req, res) => {
    const profile = await getProfile(req.authUser!.id);
    res.json(profile);
  })
);