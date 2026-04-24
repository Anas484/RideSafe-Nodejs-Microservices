import type { Request, Response, NextFunction } from "express";
import type { tokenPayload } from "../interface/userAuthInterface.js";
declare global {
    namespace Express {
        interface Request {
            user?: tokenPayload;
        }
    }
}
declare const roleAccessMiddleware: (role: string) => (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
export default roleAccessMiddleware;
//# sourceMappingURL=roleAccessMiddleware.d.ts.map