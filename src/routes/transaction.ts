import { Router } from "express";
const router = Router();

import { verify } from "../middleware/verify-token";
import { validateData } from "../middleware/validation.middleware";
import * as schema from "../schema/transaction.schema";
import * as productController from "../controllers/transaction";

router.post("/", verify, validateData(schema.create), productController.create);
router.get("/", verify, validateData(schema.getFilter), productController.getList);

export default router;
