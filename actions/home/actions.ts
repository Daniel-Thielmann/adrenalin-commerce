"use server";

import prisma from "@/lib/db";

// model Product {
//     id         Int        @id @default(autoincrement())
//     title      String     @unique
//     content    String
//     image      String
//     published  Boolean    @default(false)
//     categories Category[]
//     price      Float
//   }

export default async function getBestProducts() {
  const products = await prisma.product.findMany({
    where: {
      published: true,
    },
    select: {
      id: true,
      title: true,
      image: true,
      price: true,
    },
    take: 2,
  });
  return products;
}
