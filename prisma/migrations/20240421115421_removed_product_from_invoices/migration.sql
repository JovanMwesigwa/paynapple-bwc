/*
  Warnings:

  - You are about to drop the column `invoiceId` on the `Product` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Product" DROP CONSTRAINT "Product_invoiceId_fkey";

-- AlterTable
ALTER TABLE "Product" DROP COLUMN "invoiceId";
