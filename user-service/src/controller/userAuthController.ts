import 'dotenv/config';
import type { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import type { UserLogin, UserSignUp } from "../interface/userAuthInterface.js";
import bcrypt from "bcrypt";
import generateToken from "../utils/generateToken.js";
import type { tokenPayload, userDisplay } from "../interface/userAuthInterface.js";

const prisma = new PrismaClient();


const loginUser = async (req: Request, res: Response) => {
    try {
        const user : UserLogin = req.body;
        if (!user.email || !user.password) {
            return res.status(400).json({ message: "Missing required fields" });
        }
        const result = await prisma.user.findUnique({
            where: {
                email: user.email
            },
            select: {
                id:true,
                password: true,
                role: true
            }
        });
        console.log(result);
        if (!result) {
            return res.status(404).json({ message: "Invalid credentials" });
        }
        const isMatch = await bcrypt.compare(user.password, result.password);
        console.log(isMatch)
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid password" });
        }
        const token = generateToken({id: result.id.toString(), role: result.role} as tokenPayload);
        res.status(200).json({ message: "User logged in successfully", token });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
    
};



const signUpUser = async (req: Request, res: Response) => {
    const user : UserSignUp = req.body;
    if (!user.email || !user.firstName || !user.lastName || !user.password) {
        return res.status(400).json({ message: "Missing required fields" });
    }
    const encryptedPassword = await bcrypt.hash(user.password, 10);
    const createdUser = await prisma.user.create({
        data: {
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            role: user.role,
            password: encryptedPassword
        }
    });
    if (createdUser.role === 'DRIVER') {
        await prisma.driver.create({
            data: {
                userId: createdUser.id
            }
        });
    }else if (createdUser.role === 'PASSENGER') {
        await prisma.passenger.create({
            data: {
                userId: createdUser.id
            }
        });
    }
    const userDisplay : userDisplay = ({
        firstName:createdUser.firstName,
        lastName: createdUser.lastName,
        email:createdUser.email,
        role:createdUser.role
    })
    res.status(201).json(userDisplay);
};


export {
    signUpUser,
    loginUser
};

