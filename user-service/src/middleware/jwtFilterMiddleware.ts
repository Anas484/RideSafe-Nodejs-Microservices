import 'dotenv/config'
import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import type { tokenPayload } from '../interface/userAuthInterface.js';

const jwtFilter = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as tokenPayload;

    req.user = decoded;

    next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

export default jwtFilter;