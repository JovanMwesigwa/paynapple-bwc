"use server";

import { Product } from "@prisma/client";
import { createProduct, updateProduct } from "../db/mutations";
import { productSchema } from "@/validation";
import { redirect } from "next/navigation";
import { getAllProducts, getProductById } from "../db/queries";

export const upsertProduct = async (data: Product) => {
  const validation = await productSchema.safeParse(data);

  if (!validation.success) {
    throw new Error(validation.error.errors[0].message);
  }

  const product = await createProduct(data);

  if (!product) {
    throw new Error("Product could not be created");
  }

  redirect("/products");

  // return product;
};

export const upsertGetAllProducts = async (wallet: string) => {
  const results = await getAllProducts(wallet);

  return results;
};

export const upsertGetProductById = async (id: string) => {
  const product = await getProductById(id);

  return product;
};

export const upsertUpdateProduct = async (data: Product, id: number) => {
  const product = await updateProduct(Number(id), data);

  if (!product) {
    throw new Error("Product could not be updated");
  }

  redirect("/products");
};
