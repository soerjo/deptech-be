import { Router } from "express";
const router = Router();
import { loginUser } from "../controllers/auth";
import { validateData } from "../middleware/validation.middleware";
import { validateLoginSchema } from "../schema/auth.schema";

router.post("/login", validateData(validateLoginSchema), loginUser);

export default router;
