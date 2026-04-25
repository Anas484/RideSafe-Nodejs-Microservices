import 'dotenv/config';
import type { Request, Response } from "express";
declare const checkDriverStatus: (req: Request, res: Response) => Promise<null | undefined>;
declare const updateDriverStatusActive: (req: Request, res: Response) => Promise<void>;
declare const updateDriverStatusInactive: (req: Request, res: Response) => Promise<void>;
declare const updateDriverStatusInRide: (req: Request, res: Response) => Promise<void>;
export { checkDriverStatus, updateDriverStatusActive, updateDriverStatusInactive, updateDriverStatusInRide };
//# sourceMappingURL=driverInternalController.d.ts.map