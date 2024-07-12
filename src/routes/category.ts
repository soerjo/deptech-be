import { Router } from "express";
const router = Router();

import { verify } from "../middleware/verify-token";
import { validateData } from "../middleware/validation.middleware";
import * as schema from "../schema/category.schema";
import * as productController from "../controllers/category";

router.post("/", verify, validateData(schema.create), productController.create);
router.patch("/:id", verify, validateData(schema.update), productController.update);
router.get("/", verify, productController.getList);
router.get("/:id", verify, productController.getById);

export default router;
