import { Router } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import * as productService from "../services/products";

export const searchRoutes = Router();

searchRoutes.get(
  "/",
  asyncHandler(async (req, res) => {
    const term = (req.query.q as string) || "";
    const page = parseInt(req.query.page as string) || 1;
    const results = await productService.searchProducts(term, page);
    res.json(results);
  })
);