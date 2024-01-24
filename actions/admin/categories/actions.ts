"use server";

import prisma from "@/lib/db";

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
