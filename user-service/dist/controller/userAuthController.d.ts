import 'dotenv/config';
import type { Request, Response } from "express";
declare const loginUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
declare const signUpUser: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export { signUpUser, loginUser };
//# sourceMappingURL=userAuthController.d.ts.map