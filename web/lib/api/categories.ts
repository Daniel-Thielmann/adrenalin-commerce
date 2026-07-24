import { apiFetch, apiFetchWithAuth } from "./client";
import type { Category } from "@/types/data";

export async function fetchCategories(page: number = 1) {
  return apiFetch<{ categories: Category[]; totalPages: number }>("/categories", {
    params: { page: String(page) },
  });
}

export async function fetchAllCategories() {
  return apiFetch<{ id: number; name: string; image: string }[]>("/categories", {
    params: { all: "true" },
  });
}

export async function fetchCategoryById(id: number) {
  return apiFetch<Category>(`/categories/${id}`);
}

export async function fetchAllCategoriesAdmin() {
  return apiFetchWithAuth<{ categories: Category[]; count: number }>("/categories");
}

export async function fetchCategoryByIdAdmin(id: number) {
  return apiFetchWithAuth<Category>(`/categories/${id}`);
}

export async function createCategory(data: { name: string; image: string }) {
  return apiFetchWithAuth<Category>("/categories", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function updateCategory(id: number, data: { name?: string; image?: string }) {
  return apiFetchWithAuth<Category>(`/categories/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
}

export async function deleteCategory(id: number) {
  return apiFetchWithAuth<void>(`/categories/${id}`, { method: "DELETE" });
}