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
        in: [5, 12],
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
        in: [19, 20],
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
