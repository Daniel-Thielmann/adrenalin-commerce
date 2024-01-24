import prisma from "@/lib/db";

const itemsPerPage = 6;

export async function fetchFilteredProducts(
  query: string,
  currentPage: number
) {
  const offset = (currentPage - 1) * itemsPerPage;

  const products = await prisma.product.findMany({
    where: {
      OR: [{ title: { contains: query, mode: "insensitive" } }],
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

  const count = await prisma.product.count({
    where: {
      OR: [{ title: { contains: query, mode: "insensitive" } }],
    },
  });

  const totalPages = Math.ceil(count / itemsPerPage);

  return { products, count, totalPages };
}
