import { Router } from "express";
const router = Router();

import { verify } from "../middleware/verify-token";
import { validateData } from "../middleware/validation.middleware";
import * as schema from "../schema/product.schema";
import * as productController from "../controllers/product";

router.post("/", verify, validateData(schema.create), productController.create);
router.patch("/:id", verify, validateData(schema.update), productController.update);
router.get("/", verify, productController.getList);
router.get("/:id", verify, productController.getById);
router.delete("/:id", verify, productController.remove);

export default router;
