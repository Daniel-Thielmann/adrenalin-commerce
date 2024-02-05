"use server";

import prisma from "@/lib/db";

export async function getBestProducts1() {
  const products = await prisma.product.findMany({
    where: {
      id: {
        in: [2, 3],
      },
      published: true,
    },
    select: {
      id: true,
      title: true,
      image: true,
      price: true,
    },
  });
  return products;
}

export async function getBestProducts2() {
  const products = await prisma.product.findMany({
    where: {
      id: {
        in: [7, 4],
      },
      published: true,
    },
    select: {
      id: true,
      title: true,
      image: true,
      price: true,
    },
  });
  return products;
}

export async function getBestProducts3() {
  const products = await prisma.product.findMany({
    where: {
      id: {
        in: [14, 15],
      },
      published: true,
    },
    select: {
      id: true,
      title: true,
      image: true,
      price: true,
    },
  });
  return products;
}
