import 'dotenv/config';
import type { Request, Response } from "express";
import { PrismaClient, type User } from "@prisma/client";
import type { tokenPayload } from '../interface/userAuthInterface.js';
import type { userDisplay } from '../interface/userAuthInterface.js';
import { driverStatus } from '@prisma/client';

const prisma = new PrismaClient();



const checkDriverStatus = async (userId: number) => {
    const driver = await prisma.user.findUnique({
        where: {
            id: userId
        },
        select:{
            driver:{
                select:{
                    status: true
                }
            }
        }
    })
    if (!driver) {
        console.log("No such driver found")
        return null
    }
    return driver?.driver?.status
}


const updateDriverStatusActive = async (req: Request, res: Response) => {
    try {
        const driverId = req.params.id
        await prisma.driver.update({
            where: {
                id: Number(driverId)
            },
            data: {
                status: driverStatus.ACTIVE
            }
        })
    } catch (error) {
        
    }

}

const updateDriverStatusInactive = async (req: Request, res: Response) => {
    try {
        const driverId = req.params.id
        await prisma.driver.update({
            where: {
                id: Number(driverId)
            },
            data: {
                status: driverStatus.INACTIVE
            }
        })
    } catch (error) {
        
    }

}
const updateDriverStatusInRide = async (req: Request, res: Response) => {
    try {
        const driverId = req.params.id
        await prisma.driver.update({
            where: {
                id: Number(driverId)
            },
            data: {
                status: driverStatus.IN_RIDE
            }
        })
    } catch (error) {
        
    }

}


export {
    checkDriverStatus,
    updateDriverStatusActive,
    updateDriverStatusInactive,
    updateDriverStatusInRide
}