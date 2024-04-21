import { z } from "zod";

const InvoiceEnumSchema = z.enum(["Unpaid", "Partially", "Paid", "Rejected"]);

export const productSchema = z.object({
  wallet: z.string(),
  name: z.string(),
  price: z.number(),
  quantity: z.number(),
  description: z.string(),
});

export const clientSchema = z.object({
  wallet: z.string(),
  name: z.string(),
  email: z.string().optional(),
  phone: z.string().optional(),
  notes: z.string().optional(),
});

export const payLinkSchema = z.object({
  wallet: z.string(),
  title: z.string(),
  asset: z.string(),
  amount: z.number(),
  status: z.string(),
  fixed: z.boolean(),
  url: z.string(),
  description: z.string().optional(),
});

export const InvoiceSchema = z.object({
  id: z.number().optional(), // This is typically not provided by the user but by the database
  wallet: z.string(),
  clientId: z.number(),
  invoiceNumber: z.string(),
  subTotal: z.number(),
  total: z.number(),
  category: InvoiceEnumSchema,
  terms: z.string().optional(),
  customerNotes: z.string().optional(),
  thankYouNotes: z.string().optional(),
});
