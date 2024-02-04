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
    orderBy: {
      name: "asc",
    },
  });

  const count = await prisma.member.count();
  const totalPages = Math.ceil(count / itemsPerPage);
  return { members, totalPages };
}
