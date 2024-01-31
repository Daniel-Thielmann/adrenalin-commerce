// Importações necessárias
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// Função para buscar todos os produtos
export async function fetchAllProducts() {
  const products = await prisma.product.findMany({
    include: {
      categories: true,
    },
    orderBy: {
      id: "asc",
    },
  });

  const count = await prisma.product.count();

  return { products, count };
}

// Função para buscar um produto pelo id
export async function fetchProductById(id: number | undefined) {
  const product = await prisma.product.findUnique({
    where: { id },
    include: {
      categories: true,
    },
  });

  return product;
}

// Função para deletar um produto
export async function deleteProduct(id: number | undefined) {
  await prisma.product.delete({
    where: { id },
  });

  revalidatePath("/admin/manage/allproducts");
}

// Função para criar um produto
export async function createProduct(formData: FormData) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const image = formData.get("image") as string;
  const price = parseFloat(formData.get("price") as string);

  await prisma.product.create({
    data: {
      title,
      content,
      image,
      price,
    },
  });

  redirect("/admin/manage/allproducts");
}

// Função para atualizar um produto
export async function updateProduct(
  id: number | undefined,
  formData: FormData
) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const image = formData.get("image") as string;
  const price = parseFloat(formData.get("price") as string);

  await prisma.product.update({
    where: { id },
    data: {
      title,
      content,
      image,
      price,
    },
  });

  redirect("/admin/manage/allproducts");
}
