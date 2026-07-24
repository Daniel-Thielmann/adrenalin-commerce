"use server";

import prisma from "@/lib/db";

export async function getBestProducts1() {
  const products = await prisma.product.findMany({
    where: { published: true },
    select: {
      id: true,
      title: true,
      image: true,
      price: true,
      content: true,
      categories: { select: { id: true, name: true, image: true } },
    },
    orderBy: { id: "asc" },
    take: 4,
  });
  return products;
}

export async function getBestProducts2() {
  const products = await prisma.product.findMany({
    where: { published: true },
    select: {
      id: true,
      title: true,
      image: true,
      price: true,
      content: true,
      categories: { select: { id: true, name: true, image: true } },
    },
    orderBy: { price: "desc" },
    take: 4,
  });
  return products;
}

export async function getBestProducts3() {
  const products = await prisma.product.findMany({
    where: { published: true },
    select: {
      id: true,
      title: true,
      image: true,
      price: true,
      content: true,
      categories: { select: { id: true, name: true, image: true } },
    },
    orderBy: { price: "asc" },
    take: 4,
  });
  return products;
}