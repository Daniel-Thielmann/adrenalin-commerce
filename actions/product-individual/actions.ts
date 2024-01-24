"use server";

// model Product {
//     id         Int        @id @default(autoincrement())
//     title      String     @unique
//     content    String
//     image      String
//     published  Boolean    @default(false)
//     categories Category[]
//     price      Float
//   }

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
    },
  });

  return product;
}
