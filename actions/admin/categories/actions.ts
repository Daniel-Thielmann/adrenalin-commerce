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

export async function deleteCategory(id: number | undefined) {
  await prisma.category.delete({
    where: { id },
  });

  revalidatePath("/admin/manage/categories");
}

export async function createCategory(formData: FormData) {
  const name = formData.get("name") as string;

  await prisma.category.create({
    data: {
      name,
    },
  });

  redirect("/admin/manage/categories");
}
