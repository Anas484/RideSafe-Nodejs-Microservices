import { Router } from "express";
import { checkDriverStatus, updateDriverStatusActive, updateDriverStatusInactive, updateDriverStatusInRide } from "../controller/driverInternalController.js";
const internalRouter = Router();
internalRouter.get("/status/:id", checkDriverStatus);
internalRouter.put("/status/active/:id", updateDriverStatusActive);
internalRouter.put("/status/inactive/:id", updateDriverStatusInactive);
internalRouter.put("/status/in-ride/:id", updateDriverStatusInRide);
export default internalRouter;
//# sourceMappingURL=userInternalRouter.js.map