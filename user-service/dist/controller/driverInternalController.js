import 'dotenv/config';
import { PrismaClient } from "@prisma/client";
import { driverStatus } from '@prisma/client';
const prisma = new PrismaClient();
const checkDriverStatus = async (userId) => {
    const driver = await prisma.user.findUnique({
        where: {
            id: userId
        },
        select: {
            driver: {
                select: {
                    status: true
                }
            }
        }
    });
    if (!driver) {
        console.log("No such driver found");
        return null;
    }
    return driver?.driver?.status;
};
const updateDriverStatusActive = async (req, res) => {
    try {
        const driverId = req.params.id;
        await prisma.driver.update({
            where: {
                id: Number(driverId)
            },
            data: {
                status: driverStatus.ACTIVE
            }
        });
    }
    catch (error) {
    }
};
const updateDriverStatusInactive = async (req, res) => {
    try {
        const driverId = req.params.id;
        await prisma.driver.update({
            where: {
                id: Number(driverId)
            },
            data: {
                status: driverStatus.INACTIVE
            }
        });
    }
    catch (error) {
    }
};
const updateDriverStatusInRide = async (req, res) => {
    try {
        const driverId = req.params.id;
        await prisma.driver.update({
            where: {
                id: Number(driverId)
            },
            data: {
                status: driverStatus.IN_RIDE
            }
        });
    }
    catch (error) {
    }
};
export { checkDriverStatus, updateDriverStatusActive, updateDriverStatusInactive, updateDriverStatusInRide };
//# sourceMappingURL=driverInternalController.js.map