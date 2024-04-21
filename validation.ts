import { z } from "zod";

export const productSchema = z.object({
  wallet: z.string(),
  name: z.string(),
  price: z.number(),
  quantity: z.number(),
  description: z.string(),
});
