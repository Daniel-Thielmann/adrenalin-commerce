import prisma from "../config/database";

export function findAll() {
  return prisma.member.findMany({ orderBy: { id: "asc" } });
}

export function findAllPaginated(take: number, skip: number) {
  return prisma.member.findMany({
    skip,
    take,
    select: { id: true, name: true, role: true, email: true },
    orderBy: { id: "asc" },
  });
}

export function count() {
  return prisma.member.count();
}

export function search(query: string, take: number, skip: number) {
  return prisma.member.findMany({
    where: { name: { contains: query, mode: "insensitive" } },
    take,
    skip,
  });
}

export function countSearch(query: string) {
  return prisma.member.count({
    where: { name: { contains: query, mode: "insensitive" } },
  });
}

export function findById(id: number) {
  return prisma.member.findUnique({ where: { id } });
}

export function findByEmail(email: string) {
  return prisma.member.findUnique({ where: { email } });
}

export function create(data: { name: string; role: string; email: string }) {
  return prisma.member.create({ data });
}

export function update(id: number, data: { name?: string; role?: string; email?: string }) {
  return prisma.member.update({ where: { id }, data });
}

export function remove(id: number) {
  return prisma.member.delete({ where: { id } });
}