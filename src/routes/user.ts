import { Router } from "express";
const router = Router();

import { verify } from "../middleware/verify-token";
import { validateData } from "../middleware/validation.middleware";
import * as schema from "../schema/user.schema";
import * as userController from "../controllers/user";

router.post("/", verify, validateData(schema.create), userController.create);
router.patch("/:id", verify, validateData(schema.update), userController.update);
router.get("/", verify, userController.getList);
router.get("/:id", verify, userController.getById);
router.delete("/:id", verify, userController.remove);

export default router;
