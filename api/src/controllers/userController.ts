import { Request, Response, NextFunction } from "express";
import prisma from '../prismaInstance';
import {UserData} from '../utils/interfaces'

export const getUserData = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userEmail = req.query.email as string;
        if(userEmail === undefined || userEmail === null) {
            res.status(400).json({message: 'Please enter correct user email'})
        }
        
        const userData = await prisma.user.findUniqueOrThrow({
            where: {
                email: userEmail
            }
        });

        return res.status(200).json(userData)

    } catch(err: any) {
        if(err.code === 'P2025') {
            console.error('Cannot find user specified, email not matching in db');
            res.status(400).json({message: 'Bad email lamo'});
        }
    }
};

export const checkProfile = async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log(req.body)
        const userData: UserData = req.body;
        console.log(userData)
        if(userData.email === undefined) {
            return res.status(400).json({message: 'Email is not sent in the req query param'})
        }
        const createdUser = await prisma.user.upsert({
            where: {
                email: userData.email
            },
            create: {
                name: userData.username,
                email: userData.email,
                avatar: userData.avatar
            },
            update: {
                name: userData.username
            }
        });

        res.status(200).json(createdUser)
    } catch(err) {
        res.status(500).json({message: 'There is some problem with the upsert'})
    }
}