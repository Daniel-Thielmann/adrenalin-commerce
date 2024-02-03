"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function fetchCategories() {
  const categories = await prisma.category.findMany({
    include: {
      products: {
        select: {
          id: true,
          title: true,
        },
      },
    },
    orderBy: {
      id: "asc",
    },
  });

  const count = await prisma.category.count();

  return { categories, count };
}

export async function fetchCategoryById(id: number | undefined) {
  const category = await prisma.category.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      image: true,
    },
  });

  return category;
}

export async function deleteCategory(id: number | undefined) {
  await prisma.category.delete({
    where: { id },
  });

  revalidatePath("/admin/manage/categories");
}

export async function createCategory(formData: FormData) {
  const name = formData.get("name") as string;
  const image = formData.get("image") as string;

  await prisma.category.create({
    data: {
      name,
      image,
    },
  });

  redirect("/admin/manage/categories");
}

export async function updateCategory(
  id: number | undefined,
  formData: FormData
) {
  const name = formData.get("name") as string;
  const image = formData.get("image") as string;

  await prisma.category.update({
    where: { id },
    data: {
      name,
      image,
    },
  });

  redirect("/admin/manage/categories");
}
