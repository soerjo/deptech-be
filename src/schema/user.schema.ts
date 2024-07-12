import { z } from "zod";
import { GenderEnum } from "../enum/gender.enum";

export const create = z.object({
  body: z.object({
    first_name: z.string().min(1, { message: "required" }),
    last_name: z.string().min(1, { message: "required" }),
    email: z.string().email(),
    birthday: z.coerce.date(),
    gender: z.enum([GenderEnum.FEMALE, GenderEnum.MALE]),
    password: z.string().min(8),
  }),
  // query: userFilterSchema,
  // params: z.string(),
});

export const update = z.object({
  body: z.object({
    first_name: z.string().optional(),
    last_name: z.string().optional(),
    email: z.string().email().optional(),
    birthday: z.coerce.date().optional(),
    gender: z.enum([GenderEnum.FEMALE, GenderEnum.MALE]).optional(),
    password: z.string().min(8).optional(),
  }),
  // query: userFilterSchema,
  // params: z.string(),
});
