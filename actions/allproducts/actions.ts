"use server";

import prisma from "@/lib/db";
import { itemsPerPage } from "../utils/actions";

export async function fetchProducts(currentPage: number) {
  const offset = (currentPage - 1) * itemsPerPage;
  const products = await prisma.product.findMany({
    where: {
      published: true,
    },
    include: {
      categories: {
        select: {
          id: true,
          name: true,
        },
      },
    },
    orderBy: {
      title: "asc",
    },
    take: itemsPerPage,
    skip: offset,
  });

  const count = await prisma.product.count();

  const totalPages = Math.ceil(count / itemsPerPage);

  return { products, totalPages };
}
