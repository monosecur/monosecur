/*
  Warnings:

  - You are about to drop the column `mail` on the `RPInfo` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "RPInfo" DROP COLUMN "mail",
ADD COLUMN     "email" TEXT;
