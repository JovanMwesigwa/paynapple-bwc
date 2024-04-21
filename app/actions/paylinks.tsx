"use server";

import { payLinkSchema } from "@/validation";
import { createNewPayLink, updatePayLink } from "../db/mutations";
import { redirect } from "next/navigation";
import { getAllPayLinks, getPayLinkById } from "../db/queries";
import { PayLink } from "@prisma/client";

export const upsertCreateNewPayLink = async (data: any) => {
  const validation = await payLinkSchema.safeParse(data);

  if (!validation.success) {
    throw new Error(validation.error.errors[0].message);
  }

  const results = await createNewPayLink(data);

  if (!results) {
    throw new Error("Failed to create paylink");
  }

  redirect("/links");
};

export const upsertGetAllPayLinks = async (wallet: string) => {
  return await getAllPayLinks(wallet);
};

export const upsertGetPayLinkById = async (id: number) => {
  return await getPayLinkById(id);
};

export const upsertUpdatePayLink = async (data: PayLink, id: number) => {
  const validation = await payLinkSchema.safeParse(data);

  if (!validation.success) {
    throw new Error(validation.error.errors[0].message);
  }

  const results = await updatePayLink(id, data);

  if (!results) {
    throw new Error("Failed to update paylink");
  }

  redirect("/links");
};
