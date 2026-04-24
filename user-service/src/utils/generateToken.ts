import 'dotenv/config'
import pkg from "jsonwebtoken";
import type { tokenPayload } from "../interface/userAuthInterface.js";

const { sign } = pkg;
const JWT_SECRET = process.env.JWT_SECRET;

const generateToken = (payload: tokenPayload) => {
    if (!JWT_SECRET) {
        throw new Error("JWT_SECRET is not defined");
    }
    return sign(payload, JWT_SECRET, {
        expiresIn: "1d"
    });

}

export default generateToken;