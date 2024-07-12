import { z } from "zod";
import { TransactionEnum } from "../enum/transaction.enum";

export const create = z.object({
  body: z.object({
    name: z.string().min(1, { message: "required" }),
    transaction_type: z.enum([TransactionEnum.IN, TransactionEnum.OUT]),
    quantity: z.number(),
    productId: z.number(),
  }),
  // query: userFilterSchema,
  // params: z.string(),
});

export const getFilter = z.object({
  query: z.object({
    productId: z.string().optional(),
  }),
  // query: userFilterSchema,
  // params: z.string(),
});
