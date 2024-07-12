import { z } from "zod";

export const create = z.object({
  body: z.object({
    name: z.string().min(1, { message: "required" }),
    description: z.string().optional(),
    image_url: z.string().optional(),
    category: z.string().min(1, { message: "required" }),
  }),
  // query: userFilterSchema,
  // params: z.string(),
});

export const update = z.object({
  body: z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    image_url: z.string().optional(),
    category: z.string().optional(),
  }),
  // query: userFilterSchema,
  // params: z.string(),
});
