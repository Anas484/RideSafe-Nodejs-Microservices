import { Router } from "express";
import { getMyDriverDetail } from "../controller/userDriverController.js";
const router = Router();
router.get("/me", getMyDriverDetail);
export default router;
//# sourceMappingURL=userDriverRouter.js.map