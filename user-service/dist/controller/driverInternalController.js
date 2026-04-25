import 'dotenv/config';
import { PrismaClient } from "@prisma/client";
import { driverStatus } from '@prisma/client';
const prisma = new PrismaClient();
const checkDriverStatus = async (req, res) => {
    try {
        const driverId = req.params.id;
        const driver = await prisma.user.findUnique({
            where: {
                id: Number(driverId)
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
        res.status(200).json({
            status: driver?.driver?.status
        });
    }
    catch (error) {
        console.log(error);
        return null;
    }
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
        res.status(200).json({
            message: "Driver status updated successfully"
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal server error"
        });
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
        console.log(error);
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
        console.log(error);
    }
};
export { checkDriverStatus, updateDriverStatusActive, updateDriverStatusInactive, updateDriverStatusInRide };
//# sourceMappingURL=driverInternalController.js.map