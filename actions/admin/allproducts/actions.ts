"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function fetchAllProducts() {
  const products = await prisma.product.findMany({
    include: {
      categories: {
        select: {
          id: true,
          name: true,
        },
      },
    },
    orderBy: {
      id: "asc",
    },
  });

  const count = await prisma.product.count();
  return { products, count };
}

export async function fetchProductById(id: number | undefined) {
  const product = await prisma.product.findUnique({
    where: { id },
    include: {
      categories: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });

  return product;
}
export async function deleteProduct(id: number | undefined) {
  await prisma.product.delete({
    where: { id },
  });

  revalidatePath("/admin/manage/allproducts");
}

export async function createProduct(formData: FormData) {
  const title = formData.get("title") as string;

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

export async function updateProduct(
  id: number | undefined,
  formData: FormData
) {
  const name = formData.get("name") as string;

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
