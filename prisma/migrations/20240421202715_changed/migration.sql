/*
  Warnings:

  - You are about to drop the column `dueDate` on the `Invoice` table. All the data in the column will be lost.
  - You are about to drop the column `minipaywallet` on the `Invoice` table. All the data in the column will be lost.
  - You are about to drop the column `invoiceId` on the `PayLink` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "PayLink" DROP CONSTRAINT "PayLink_invoiceId_fkey";

-- AlterTable
ALTER TABLE "Invoice" DROP COLUMN "dueDate",
DROP COLUMN "minipaywallet";

-- AlterTable
ALTER TABLE "PayLink" DROP COLUMN "invoiceId";
