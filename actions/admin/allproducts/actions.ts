"use server";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

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

export async function fetchProductById(id: number | undefined) {
  const product = await prisma.product.findUnique({
    where: { id },
    select: {
      id: true,
      title: true,
      content: true,
      categories: true,
      price: true,
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
  const content = formData.get("content") as string;
  const image = formData.get("image") as string;
  const categories = formData.getAll("categories") as string[];
  const price = parseFloat(formData.get("price") as string);

  const categoryRecords = await Promise.all(
    categories.map((categoryName) =>
      prisma.category.upsert({
        where: { name: categoryName },
        update: {},
        create: { name: categoryName },
      })
    )
  );

  await prisma.product.create({
    data: {
      title,
      content,
      image,
      price,
      categories: {
        connect: categoryRecords.map((category) => ({ id: category.id })),
      },
    },
  });

  redirect("/admin/manage/allproducts");
}

export async function updateProduct(
  id: number | undefined,
  formData: FormData
) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const image = formData.get("image") as string;
  const price = parseFloat(formData.get("price") as string);
  const categoryNames = formData.getAll("categories") as string[];

  const categoryRecords = await Promise.all(
    categoryNames.map((categoryName) =>
      prisma.category.upsert({
        where: { name: categoryName },
        update: {},
        create: { name: categoryName },
      })
    )
  );

  await prisma.product.update({
    where: { id: id },
    data: {
      title,
      content,
      image,
      price,
      categories: {
        set: categoryRecords.map((category) => ({ id: category.id })),
      },
    },
  });

  redirect("/admin/manage/allproducts");
}

export async function fetchAllCategories() {
  const categories = await prisma.category.findMany({
    select: {
      id: true,
      name: true,
    },
    orderBy: {
      id: "asc",
    },
  });

  return categories;
}
