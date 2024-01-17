-- CreateTable
CREATE TABLE "Membro" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "cargo" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL,

    CONSTRAINT "Membro_pkey" PRIMARY KEY ("id")
);
