import prisma from "../config/database";

export function findAll() {
  return prisma.category.findMany({
    include: { products: true },
  });
}

export function findAllPaginated(take: number, skip: number) {
  return prisma.category.findMany({
    skip,
    take,
    select: { id: true, name: true, image: true },
    orderBy: { id: "asc" },
  });
}

export function count() {
  return prisma.category.count();
}

export function findById(id: number) {
  return prisma.category.findUnique({
    where: { id },
    include: { products: true },
  });
}

export function findByName(name: string) {
  return prisma.category.findUnique({
    where: { name },
  });
}

export function create(data: { name: string; image: string }) {
  return prisma.category.create({ data });
}

export function update(id: number, data: { name?: string; image?: string }) {
  return prisma.category.update({ where: { id }, data });
}

export function remove(id: number) {
  return prisma.category.delete({ where: { id } });
}