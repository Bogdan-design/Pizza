import {prisma} from "./prisma.client";
import {hashSync} from "bcrypt";
import {categories} from "@/prisma/constans";


async function up() {
    console.log('seed')
    await prisma.user.createMany({
        data: [
            {
                fullName: 'User Test',
                email: 'user@example.com',
                password: hashSync('11111', 10),
                verified: new Date(),
                role: 'USER'
            },
            {
                fullName: 'Admin Admin',
                email: 'admin@example.com',
                password: hashSync('11111', 10),
                verified: new Date(),
                role: 'ADMIN'
            }
        ]
    })
    await prisma.category.createMany({
        data: categories
    })
}

async function down() {
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE;`
}

async function main() {
    try {
        await up();
        await down();
    } catch (error) {
        console.error(error)
    }
}

main()
    .then(async ()=>{
    await prisma.$disconnect()
})
    .catch(async (e)=>{
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})