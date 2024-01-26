"use server";

import prisma from "@/lib/db";
import { itemsPerPage } from "../utils/actions";

export default async function fetchCategories(currentPage: number) {
  const offset = (currentPage - 1) * itemsPerPage;

  const categories = await prisma.category.findMany({
    skip: offset,
    take: itemsPerPage,
    select: {
      id: true,
      name: true,
    },
  });

  const count = await prisma.category.count();
  const totalPages = Math.ceil(count / itemsPerPage);
  return { categories, totalPages };
}
