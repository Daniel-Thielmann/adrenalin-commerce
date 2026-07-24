import { apiFetch } from "./client";
import type { Product } from "@/types/data";

export async function fetchHomeProducts() {
  return apiFetch<{
    bestProducts1: Product[];
    bestProducts2: Product[];
    bestProducts3: Product[];
  }>("/home/products");
}

export async function fetchAllProducts(page: number = 1) {
  return apiFetch<{ products: Product[]; totalPages: number }>("/products", {
    params: { page: String(page) },
  });
}

export async function fetchProductById(id: number) {
  return apiFetch<Product>(`/products/${id}`);
}

export async function fetchProductsByCategory(categoryId: number) {
  return apiFetch<Product[]>(`/products/category/${categoryId}`);
}

export async function searchProducts(query: string, page: number = 1) {
  return apiFetch<{ products: Product[]; count: number; totalPages: number }>("/search", {
    params: { q: query, page: String(page) },
  });
}

export async function fetchAllProductsAdmin() {
  return apiFetch<{ products: Product[]; count: number }>("/products/admin", {
    headers: getAuthHeader(),
  });
}

export async function fetchProductByIdAdmin(id: number) {
  return apiFetch<Product>(`/products/${id}`, {
    headers: getAuthHeader(),
  });
}

export async function createProduct(data: FormData) {
  const token = getToken();
  const res = await fetch(`${getBaseUrl()}/products`, {
    method: "POST",
    headers: token ? { Authorization: `Bearer ${token}` } : {},
    body: data,
  });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error || "Erro ao criar produto");
  }
  return res.json();
}

export async function updateProduct(id: number, data: FormData) {
  const token = getToken();
  const res = await fetch(`${getBaseUrl()}/products/${id}`, {
    method: "PUT",
    headers: token ? { Authorization: `Bearer ${token}` } : {},
    body: data,
  });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error || "Erro ao atualizar produto");
  }
  return res.json();
}

export async function deleteProduct(id: number) {
  return apiFetch<void>(`/products/${id}`, {
    method: "DELETE",
    headers: getAuthHeader(),
  });
}

function getBaseUrl() {
  if (typeof window !== "undefined") return process.env.NEXT_PUBLIC_API_URL || "http://localhost:3333/api";
  return process.env.API_URL || "http://backend:3333/api";
}

function getToken(): string | null {
  if (typeof window !== "undefined") return localStorage.getItem("token");
  return null;
}

function getAuthHeader(): Record<string, string> {
  const token = getToken();
  return token ? { Authorization: `Bearer ${token}` } : {};
}