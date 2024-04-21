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

export const getAllInvoices = async (wallet: string) => {
  return await prisma.invoice.findMany({
    where: {
      wallet,
    },
  });
};

export const getAllPayLinks = async (wallet: string) => {
  return await prisma.payLink.findMany({
    where: {
      wallet,
    },
  });
};

export const getPayLinkById = async (id: number) => {
  const payLink = await prisma.payLink.findUnique({
    where: {
      id: id,
    },
  });

  if (!payLink) {
    throw new Error("PayLink not found");
  }

  return payLink;
};
