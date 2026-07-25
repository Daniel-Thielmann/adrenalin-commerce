import prisma from "../config/database";

export function findByEmail(email: string) {
  return prisma.user.findUnique({ where: { email } });
}

export function findById(id: number) {
  return prisma.user.findUnique({ where: { id } });
}

export function findByGoogleId(googleId: string) {
  return prisma.user.findUnique({ where: { googleId } });
}

export function create(data: { email: string; name: string; googleId: string }) {
  return prisma.user.create({ data });
}

export function updateGoogleId(id: number, googleId: string) {
  return prisma.user.update({ where: { id }, data: { googleId } });
}