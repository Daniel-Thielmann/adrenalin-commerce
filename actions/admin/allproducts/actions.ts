// actions.ts"use server";

import prisma from "@/lib/db";

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
