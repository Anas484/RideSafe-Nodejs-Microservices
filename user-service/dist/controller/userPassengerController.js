import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
});
const prisma = new PrismaClient({ adapter });
export const createPassenger = async (req, res) => {
    const user = req.body;
    const createdUser = await prisma.user.create({
        data: {
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            role: "PASSENGER"
        }
    });
    res.status(201).json(createdUser);
};
//# sourceMappingURL=userPassengerController.js.map