import 'dotenv/config';
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const getMyDriverDetail = async (req, res) => {
    try {
        const isdriver = req.user;
        if (!isdriver) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        const driver = await prisma.user.findUnique({
            where: {
                id: Number(isdriver.id)
            },
            select: {
                firstName: true,
                lastName: true,
                email: true,
                role: true
            }
        });
        if (!driver) {
            res.json({ message: "Driver Not found" });
        }
        const driverDisplay = {
            firstName: driver?.firstName || '',
            lastName: driver?.lastName || '',
            email: driver?.email || '',
            role: driver?.role || '',
        };
        res.status(200).json(driverDisplay);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
export { getMyDriverDetail };
//# sourceMappingURL=userDriverController.js.map