import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

(async function main() {
    try {
        //Clear all of the user data
        await prisma.user.deleteMany();
        await prisma.user.createMany({
            data: [
                {
                    name: 'Test First',
                    email: 'abc@xyz.com',
                },
                {
                    name: 'Test Last',
                    email: 'bcd@xyz.com',
                },
            ]
        });

    } catch(err: unknown) {
        console.error(err);
        console.error('Insert error');
    }
})();