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
      id: Number(id),
    },
  });

  if (!product) {
    throw new Error("Product not found");
  }

  return product;
};

export const getAllClients = async (wallet: string) => {
  return await prisma.client.findMany({
    where: {
      wallet,
    },
  });
};

export const getClientById = async (id: string) => {
  const client = await prisma.client.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!client) {
    throw new Error("Client not found");
  }

  return client;
};
