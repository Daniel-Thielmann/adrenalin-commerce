import { Router } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { authMiddleware } from "../middlewares/auth";
import * as categoryService from "../services/categories";

export const categoryRoutes = Router();

categoryRoutes.get(
  "/",
  asyncHandler(async (req, res) => {
    const page = parseInt(req.query.page as string) || 1;
    const all = req.query.all === "true";
    if (all) {
      const categories = await categoryService.listAllCategories();
      return res.json(categories);
    }
    const result = await categoryService.listAllCategoriesPaginated(page);
    res.json(result);
  })
);

categoryRoutes.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const category = await categoryService.getCategoryById(Number(req.params.id));
    res.json(category);
  })
);

categoryRoutes.get(
  "/:id/admin",
  authMiddleware,
  asyncHandler(async (req, res) => {
    const category = await categoryService.getCategoryById(Number(req.params.id));
    res.json(category);
  })
);

categoryRoutes.post(
  "/",
  authMiddleware,
  asyncHandler(async (req, res) => {
    const category = await categoryService.createCategory(req.body);
    res.status(201).json(category);
  })
);

categoryRoutes.put(
  "/:id",
  authMiddleware,
  asyncHandler(async (req, res) => {
    const category = await categoryService.updateCategory(Number(req.params.id), req.body);
    res.json(category);
  })
);

categoryRoutes.delete(
  "/:id",
  authMiddleware,
  asyncHandler(async (req, res) => {
    await categoryService.deleteCategory(Number(req.params.id));
    res.status(204).send();
  })
);