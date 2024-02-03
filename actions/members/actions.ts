import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getServerSideProps() {
  const members = await prisma.member.findMany();

  return {
    props: {
      members,
    },
  };
}
