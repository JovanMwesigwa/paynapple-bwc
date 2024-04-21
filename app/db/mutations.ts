import prisma from "@/prisma/client";
import { Product } from "@prisma/client";

export const createProduct = async (data: Product) => {
  return await prisma.product.create({ data });
};

export const updateProduct = async (id: number, data: Product) => {
  return await prisma.product.update({ where: { id }, data });
};
