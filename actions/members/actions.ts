"use server";

import prisma from "@/lib/db";
import { itemsPerPage } from "../utils/actions";

export async function fetchMembers(currentPage: number) {
  const offset = (currentPage - 1) * itemsPerPage;

  const members = await prisma.member.findMany({
    skip: offset,
    take: itemsPerPage,
    select: {
      id: true,
      name: true,
      role: true,
      email: true,
    },
  });

  const count = await prisma.member.count();
  const totalPages = Math.ceil(count / itemsPerPage);
  return { members, totalPages, count };
}

export async function searchMembers(query: string, currentPage: number) {
  const offset = (currentPage - 1) * itemsPerPage;

  const members = await prisma.member.findMany({
    where: {
      OR: [{ name: { contains: query, mode: "insensitive" } }],
    },
    orderBy: {
      name: "asc",
    },
    take: itemsPerPage,
    skip: offset,
  });

  const count = await prisma.member.count({
    where: {
      OR: [{ name: { contains: query, mode: "insensitive" } }],
    },
  });

  const totalPages = Math.ceil(count / itemsPerPage);

  return { members, count, totalPages };
}
