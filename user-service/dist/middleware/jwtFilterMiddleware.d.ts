import 'dotenv/config';
import type { Request, Response, NextFunction } from "express";
declare const jwtFilter: (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
export default jwtFilter;
//# sourceMappingURL=jwtFilterMiddleware.d.ts.map