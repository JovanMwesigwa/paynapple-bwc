import prisma from "@/prisma/client";
import { Client, Product } from "@prisma/client";

export const createProduct = async (data: Product) => {
  return await prisma.product.create({ data });
};

export const updateProduct = async (id: number, data: Product) => {
  return await prisma.product.update({ where: { id }, data });
};

export const createClient = async (data: Client) => {
  return await prisma.client.create({
    data: {
      name: data.name,
      wallet: data.wallet,
      email: data.email,
      phone: data.phone,
      notes: data.notes,
    },
  });
};

export const updateClient = async (id: number, data: Client) => {
  return await prisma.client.update({ where: { id }, data });
};

export const createNewPayLink = async (data: any) => {
  return await prisma.payLink.create({ data });
};

export const updatePayLink = async (id: number, data: any) => {
  return await prisma.payLink.update({ where: { id }, data });
};

export const createInvoice = async (data: any) => {
  const { products, ...invoiceData } = data;

  return await prisma.invoice.create({
    data: {
      ...invoiceData,
      products: {
        connect: products.map((product: any) => ({
          id: product.id, // Connect using the existing product IDs
        })),
      },
    },
  });
};
