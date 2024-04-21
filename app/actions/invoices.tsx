"use server";

import { InvoiceSchema } from "@/validation";
import { createInvoice } from "../db/mutations";
import { redirect } from "next/navigation";
import { getAllInvoices } from "../db/queries";

export const upsertCreateNewInvoice = async (data: any) => {
  const validation = await InvoiceSchema.safeParse(data);

  if (!validation.success) {
    throw new Error(validation.error.errors[0].message);
  }

  const result = await createInvoice(data);

  if (!result) {
    throw new Error("Invoice could not be created");
  }

  redirect("/dashboard");
};

export const upsertGetAllInvoices = async (wallet: string) => {
  const result = await getAllInvoices(wallet);

  return result;
};
