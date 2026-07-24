import { Router } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import * as productService from "../services/products";

export const homeRoutes = Router();

homeRoutes.get(
  "/products",
  asyncHandler(async (_req, res) => {
    const result = await productService.getHomeProducts();
    res.json(result);
  })
);