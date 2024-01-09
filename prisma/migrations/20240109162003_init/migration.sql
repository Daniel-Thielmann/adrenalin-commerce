/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Post";

-- CreateTable
CREATE TABLE "Produto" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "preco" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL,

    CONSTRAINT "Produto_pkey" PRIMARY KEY ("id")
);
