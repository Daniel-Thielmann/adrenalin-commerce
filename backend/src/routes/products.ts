import { Router } from "express";
import { asyncHandler } from "../utils/asyncHandler";
import { authMiddleware } from "../middlewares/auth";
import { upload } from "../middlewares/upload";
import * as productService from "../services/products";

export const productRoutes = Router();

productRoutes.get(
  "/",
  asyncHandler(async (req, res) => {
    const page = parseInt(req.query.page as string) || 1;
    const result = await productService.listAllProductsPaginated(page);
    res.json(result);
  })
);

productRoutes.get(
  "/admin",
  authMiddleware,
  asyncHandler(async (_req, res) => {
    const products = await productService.listAllProductsAdmin();
    res.json(products);
  })
);

productRoutes.get(
  "/category/:categoryId",
  asyncHandler(async (req, res) => {
    const products = await productService.getProductsByCategory(Number(req.params.categoryId));
    res.json(products);
  })
);

productRoutes.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await productService.getProductById(Number(req.params.id));
    res.json(product);
  })
);

productRoutes.post(
  "/",
  authMiddleware,
  upload.single("image"),
  asyncHandler(async (req, res) => {
    const body = typeof req.body === "object" ? req.body : {};
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : body.image || "";
    const categoryNames = body.categories
      ? typeof body.categories === "string"
        ? body.categories.split(",").map((s: string) => s.trim()).filter(Boolean)
        : body.categories
      : [];

    const product = await productService.createProduct({
      title: body.title,
      content: body.content,
      image: imageUrl,
      price: parseFloat(body.price),
      published: true,
      categoryNames,
    });
    res.status(201).json(product);
  })
);

productRoutes.put(
  "/:id",
  authMiddleware,
  upload.single("image"),
  asyncHandler(async (req, res) => {
    const body = typeof req.body === "object" ? req.body : {};
    const imageUrl = req.file ? `/uploads/${req.file.filename}` : undefined;
    const categoryNames = body.categories
      ? typeof body.categories === "string"
        ? body.categories.split(",").map((s: string) => s.trim()).filter(Boolean)
        : body.categories
      : undefined;

    const updateData: any = {};
    if (body.title) updateData.title = body.title;
    if (body.content) updateData.content = body.content;
    if (imageUrl) updateData.image = imageUrl;
    if (body.price) updateData.price = parseFloat(body.price);
    if (body.published !== undefined) updateData.published = body.published === "true" || body.published === true;
    if (categoryNames) updateData.categoryNames = categoryNames;

    const product = await productService.updateProduct(Number(req.params.id), updateData);
    res.json(product);
  })
);

productRoutes.delete(
  "/:id",
  authMiddleware,
  asyncHandler(async (req, res) => {
    await productService.deleteProduct(Number(req.params.id));
    res.status(204).send();
  })
);