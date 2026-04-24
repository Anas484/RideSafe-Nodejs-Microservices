import 'dotenv/config';
import pkg from "jsonwebtoken";
const { sign } = pkg;
const JWT_SECRET = process.env.JWT_SECRET;
const generateToken = (payload) => {
    if (!JWT_SECRET) {
        throw new Error("JWT_SECRET is not defined");
    }
    return sign(payload, JWT_SECRET, {
        expiresIn: "1d"
    });
};
export default generateToken;
//# sourceMappingURL=generateToken.js.map