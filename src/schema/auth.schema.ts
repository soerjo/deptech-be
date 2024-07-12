import { z } from "zod";

export const validateLoginSchema = z.object({
  body: z.object({
    email: z.string().email(),
    password: z.string().min(8),
  }),
  // query: userFilterSchema,
  // params: z.string(),
});
