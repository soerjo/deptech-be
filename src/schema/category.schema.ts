import { z } from "zod";

export const create = z.object({
  body: z.object({
    code: z.string().min(1, { message: "required" }),
    name: z.string().min(1, { message: "required" }),
    description: z.string().optional(),
  }),
});

export const update = z.object({
  body: z.object({
    name: z.string().optional(),
    description: z.string().optional(),
  }),
});
