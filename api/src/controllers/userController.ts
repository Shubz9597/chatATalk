import { Request, Response, NextFunction, response } from "express";
import prisma from '../prismaInstance';
import { Prisma } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";

export const getUserData = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const userEmail = req.params.email;
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