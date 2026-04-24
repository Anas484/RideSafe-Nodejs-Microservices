import 'dotenv/config';
import type { Request, Response } from "express";
declare const checkDriverStatus: (userId: number) => Promise<import(".prisma/client").$Enums.driverStatus | null | undefined>;
declare const updateDriverStatusActive: (req: Request, res: Response) => Promise<void>;
declare const updateDriverStatusInactive: (req: Request, res: Response) => Promise<void>;
declare const updateDriverStatusInRide: (req: Request, res: Response) => Promise<void>;
export { checkDriverStatus, updateDriverStatusActive, updateDriverStatusInactive, updateDriverStatusInRide };
//# sourceMappingURL=driverInternalController.d.ts.map