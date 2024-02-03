"use server";

import prisma from "@/lib/db";

export async function fetchProductById(id: number) {
  const product = await prisma.product.findUnique({
    where: { id },
    select: {
      id: true,
      title: true,
      content: true,
      image: true,
      published: true,
      price: true,
      categories: true,
    },
  });

  return product;
}
