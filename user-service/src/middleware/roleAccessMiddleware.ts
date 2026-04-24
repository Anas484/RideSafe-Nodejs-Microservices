import type { Request, Response, NextFunction } from "express";
import type { tokenPayload } from "../interface/userAuthInterface.js";

declare global {
  namespace Express {
    interface Request {
      user?: tokenPayload;
    }
  }
}
const roleAccessMiddleware = (role : string) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const user = req.user as tokenPayload
        if(!user){
            return res.status(401).json({ message: "Unauthorized" });
        }
        if(user.role != role){
            return res.status(403).json({ message: "Forbidden" });
        }
        next();
    };
};

export default roleAccessMiddleware;