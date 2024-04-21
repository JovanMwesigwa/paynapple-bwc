import prisma from "@/prisma/client";

export const getAllProducts = async (wallet: string) => {
  return await prisma.product.findMany({
    where: {
      wallet,
    },
  });
};

export const getProductById = async (id: string) => {
  const product = await prisma.product.findUnique({
    where: {
      id,
    },
  });

  if (!product) {
    throw new Error("Product not found");
  }

  return product;
};
