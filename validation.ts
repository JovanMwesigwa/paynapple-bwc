import { z } from "zod";

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
