"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function fetchMembers() {
  const members = await prisma.member.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
    },

    orderBy: {
      id: "asc",
    },
  });

  const count = await prisma.member.count();

  return { members, count };
}

export async function fetchMemberById(id: number | undefined) {
  const member = await prisma.member.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
    },
  });

  return member;
}

export async function deleteMember(id: number | undefined) {
  await prisma.member.delete({
    where: { id },
  });

  revalidatePath("/admin/manage/members");
}

export async function createMember(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const role = formData.get("role") as string;

  await prisma.member.create({
    data: {
      name,
      email,
      role,
    },
  });

  redirect("/admin/manage/members");
}

export async function updateMember(id: number | undefined, formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const role = formData.get("role") as string;

  await prisma.member.update({
    where: { id },
    data: {
      name,
      email,
      role,
    },
  });

  redirect("/admin/manage/members");
}
