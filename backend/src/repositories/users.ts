import prisma from "../config/database";

export function findByEmail(email: string) {
  return prisma.user.findUnique({ where: { email } });
}

export function findById(id: number) {
  return prisma.user.findUnique({ where: { id } });
}