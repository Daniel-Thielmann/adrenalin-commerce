import prisma from "@/lib/db";

const itemsPerPage = 6;

export async function fetchFilteredProducts(
  query: string,
  currentPage: number
) {
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
  });

  const count = await prisma.product.count({
    where: {
      OR: [{ title: { contains: query, mode: "insensitive" } }],
    },
  });

  return { products, count };
}
