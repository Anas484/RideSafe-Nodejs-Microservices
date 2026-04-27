import { Router } from 'express';
import { getDriversNearby } from '../controller/internalDriverController.js';
const router = Router();
router.post('/nearby', getDriversNearby);
export default router;
//# sourceMappingURL=InternalDriverRouter.js.map