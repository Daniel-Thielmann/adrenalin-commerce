import * as categoryRepo from "../repositories/categories";
import { AppError } from "../middlewares/errorHandler";

const ITEMS_PER_PAGE = 8;

export async function listAllCategories() {
  return categoryRepo.findAll();
}

export async function listAllCategoriesPaginated(page: number) {
  const offset = (page - 1) * ITEMS_PER_PAGE;
  const categories = await categoryRepo.findAllPaginated(ITEMS_PER_PAGE, offset);
  const count = await categoryRepo.count();
  const totalPages = Math.ceil(count / ITEMS_PER_PAGE);
  return { categories, totalPages };
}

export async function getCategoryById(id: number) {
  const category = await categoryRepo.findById(id);
  if (!category) throw new AppError("Categoria não encontrada", 404);
  return category;
}

export async function createCategory(data: { name: string; image: string }) {
  const existing = await categoryRepo.findByName(data.name);
  if (existing) throw new AppError("Categoria com este nome já existe");
  return categoryRepo.create(data);
}

export async function updateCategory(id: number, data: { name?: string; image?: string }) {
  const existing = await categoryRepo.findById(id);
  if (!existing) throw new AppError("Categoria não encontrada", 404);
  return categoryRepo.update(id, data);
}

export async function deleteCategory(id: number) {
  const existing = await categoryRepo.findById(id);
  if (!existing) throw new AppError("Categoria não encontrada", 404);
  return categoryRepo.remove(id);
}