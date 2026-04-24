import 'dotenv/config';
import type { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import type { tokenPayload } from '../interface/userAuthInterface.js';

const prisma = new PrismaClient();


const getMyDriverDetail = (req :Request, res:Response) => {
    try {
        const isdriver = req.user
        if (!isdriver) {
            return res.status(401).json({ message: 'Unauthorized' })
        }
        const driver = prisma.user.findUnique({
        where: {
            id: Number(isdriver.id)
        }
    })
    res.status(200).json({driver})
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Internal server error' })
    }
    
}