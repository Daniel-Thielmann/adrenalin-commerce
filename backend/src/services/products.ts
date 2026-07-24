import * as productRepo from "../repositories/products";
import * as categoryRepo from "../repositories/categories";
import { AppError } from "../middlewares/errorHandler";

const ITEMS_PER_PAGE = 8;

export async function getHomeProducts() {
  const [products1, products2, products3] = await Promise.all([
    productRepo.findHomeProducts({ id: "asc" }, 4),
    productRepo.findHomeProducts({ price: "desc" }, 4),
    productRepo.findHomeProducts({ price: "asc" }, 4),
  ]);
  return { bestProducts1: products1, bestProducts2: products2, bestProducts3: products3 };
}

export async function getProductById(id: number) {
  const product = await productRepo.findById(id);
  if (!product) throw new AppError("Produto não encontrado", 404);
  return product;
}

export async function getProductsByCategory(categoryId: number) {
  return productRepo.findByCategory(categoryId);
}

export async function listAllProducts() {
  return productRepo.findAllPublished();
}

export async function listAllProductsPaginated(page: number) {
  const offset = (page - 1) * ITEMS_PER_PAGE;
  const products = await productRepo.findAllPublishedPaginated(ITEMS_PER_PAGE, offset);
  const count = await productRepo.countPublished();
  const totalPages = Math.ceil(count / ITEMS_PER_PAGE);
  return { products, totalPages };
}

export async function listAllProductsAdmin() {
  return productRepo.findAll();
}

export async function searchProducts(term: string, page: number = 1) {
  if (!term || term.trim().length === 0) {
    throw new AppError("Termo de busca é obrigatório");
  }
  const offset = (page - 1) * ITEMS_PER_PAGE;
  const products = await productRepo.search(term, ITEMS_PER_PAGE, offset);
  const count = await productRepo.countSearch(term);
  const totalPages = Math.ceil(count / ITEMS_PER_PAGE);
  return { products, count, totalPages };
}

export async function createProduct(data: {
  title: string;
  content: string;
  image: string;
  price: number;
  published: boolean;
  categoryIds?: number[];
  categoryNames?: string[];
}) {
  const existing = await productRepo.findByTitle(data.title);
  if (existing) throw new AppError("Produto com este título já existe");

  let categoryIds = data.categoryIds;
  if (data.categoryNames && data.categoryNames.length > 0) {
    const cats = await Promise.all(
      data.categoryNames.map(async (name) => {
        const cat = await categoryRepo.findByName(name);
        return cat ? cat.id : null;
      })
    );
    categoryIds = cats.filter((id): id is number => id !== null);
  }

  return productRepo.create({
    ...data,
    categories: (categoryIds || []).map((id) => ({ id })),
  });
}

export async function updateProduct(
  id: number,
  data: {
    title?: string;
    content?: string;
    image?: string;
    price?: number;
    published?: boolean;
    categoryIds?: number[];
    categoryNames?: string[];
  }
) {
  const product = await productRepo.findById(id);
  if (!product) throw new AppError("Produto não encontrado", 404);

  let categoryIds = data.categoryIds;
  if (data.categoryNames && data.categoryNames.length > 0) {
    const cats = await Promise.all(
      data.categoryNames.map(async (name) => {
        const cat = await categoryRepo.findByName(name);
        return cat ? cat.id : null;
      })
    );
    categoryIds = cats.filter((id): id is number => id !== null);
  }

  const updateData: any = { ...data };
  delete updateData.categoryNames;
  delete updateData.categoryIds;
  if (categoryIds) {
    updateData.categories = categoryIds.map((id) => ({ id }));
  }

  return productRepo.update(id, updateData);
}

export async function deleteProduct(id: number) {
  const product = await productRepo.findById(id);
  if (!product) throw new AppError("Produto não encontrado", 404);
  return productRepo.remove(id);
}