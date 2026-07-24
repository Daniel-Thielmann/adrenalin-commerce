import prisma from "../config/database";
import type { Prisma } from "@prisma/client";

export function findHomeProducts(sort: Prisma.ProductOrderByWithRelationInput, take: number) {
  return prisma.product.findMany({
    where: { published: true },
    select: {
      id: true,
      title: true,
      image: true,
      price: true,
      content: true,
      categories: { select: { id: true, name: true, image: true } },
    },
    orderBy: sort,
    take,
  });
}

export function findAllPublishedPaginated(take: number, skip: number) {
  return prisma.product.findMany({
    where: { published: true },
    include: {
      categories: {
        select: { id: true, name: true },
      },
    },
    orderBy: { title: "asc" },
    take,
    skip,
  });
}

export function countPublished() {
  return prisma.product.count({ where: { published: true } });
}

export function findAllPublished() {
  return prisma.product.findMany({
    where: { published: true },
    include: { categories: true },
    orderBy: { id: "asc" },
  });
}

export function findAll() {
  return prisma.product.findMany({
    include: { categories: true },
    orderBy: { id: "asc" },
  });
}

export function findById(id: number) {
  return prisma.product.findUnique({
    where: { id },
    include: { categories: true },
  });
}

export function findByTitle(title: string) {
  return prisma.product.findUnique({ where: { title } });
}

export function findByCategory(categoryId: number) {
  return prisma.product.findMany({
    where: {
      published: true,
      categories: { some: { id: categoryId } },
    },
    include: { categories: true },
    orderBy: { id: "asc" },
  });
}

export function search(term: string, take?: number, skip?: number) {
  return prisma.product.findMany({
    where: {
      published: true,
      title: { contains: term, mode: "insensitive" },
    },
    include: {
      categories: {
        select: { id: true, name: true },
      },
    },
    orderBy: { title: "asc" },
    ...(take ? { take } : {}),
    ...(skip ? { skip } : {}),
  });
}

export function countSearch(term: string) {
  return prisma.product.count({
    where: {
      published: true,
      title: { contains: term, mode: "insensitive" },
    },
  });
}

export function create(data: {
  title: string;
  content: string;
  image: string;
  price: number;
  published: boolean;
  categories: { id: number }[];
}) {
  const { categories, ...productData } = data;
  return prisma.product.create({
    data: {
      ...productData,
      categories: { connect: categories },
    },
    include: { categories: true },
  });
}

export function update(
  id: number,
  data: {
    title?: string;
    content?: string;
    image?: string;
    price?: number;
    published?: boolean;
    categories?: { id: number }[];
  }
) {
  const { categories, ...productData } = data;
  return prisma.product.update({
    where: { id },
    data: {
      ...productData,
      ...(categories ? { categories: { set: categories } } : {}),
    },
    include: { categories: true },
  });
}

export function remove(id: number) {
  return prisma.product.delete({ where: { id } });
}