"use server";

import { Client } from "@prisma/client";
import { createClient, updateClient } from "../db/mutations";
import { redirect } from "next/navigation";
import { clientSchema } from "@/validation";
import { getAllClients, getClientById } from "../db/queries";

export const upsertNewClient = async (data: Client) => {
  const validation = await clientSchema.safeParse(data);

  if (!validation.success) {
    throw new Error(validation.error.errors[0].message);
  }

  const client = await createClient(data);

  if (!client) {
    throw new Error("Client could not be created");
  }

  redirect("/clients");
};

export const upsertGetAllClients = async (wallet: string) => {
  return await getAllClients(wallet);
};

export const upsertGetClientById = async (id: string) => {
  return await getClientById(id);
};

export const upsertUpdateClient = async (data: Client, id: number) => {
  const client = await getClientById(id.toString());

  if (!client) {
    throw new Error("Client not found");
  }

  const validation = await clientSchema.safeParse(data);

  if (!validation.success) {
    throw new Error(validation.error.errors[0].message);
  }

  const result = await updateClient(id, data);

  if (!result) {
    throw new Error("Client could not be updated");
  }

  redirect("/clients");
};
