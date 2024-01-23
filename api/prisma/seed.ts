import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

(async function main() {
    try {
        //Clear all of the user data
        await prisma.user.deleteMany();
         await prisma.user.createMany({
            data: [
                {
                    firstName: 'Test',
                    lastName: 'last',
                    email: 'abc@xyz.com',
                },
                {
                    firstName: 'Test2',
                    lastName: 'last2',
                    email: 'bcd@xyz.com',
                },
            ]
        });

    } catch(err: unknown) {
        console.error(err);
        console.error('Insert error');
    }
})();