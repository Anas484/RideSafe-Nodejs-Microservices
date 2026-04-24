import 'dotenv/config';
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const getMyDriverDetail = (req, res) => {
    try {
        const isdriver = req.user;
        if (!isdriver) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        const driver = prisma.user.findUnique({
            where: {
                id: Number(isdriver.id)
            }
        });
        res.status(200).json({ driver });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
//# sourceMappingURL=userDriverController.js.map