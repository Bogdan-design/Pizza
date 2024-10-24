import {prisma} from "./prisma.client";
import {hashSync} from "bcrypt";
import {categories, ingredients, products} from "./constans";
import {Prisma} from "@prisma/client";

const randomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
};

const generatePizza = (productId: number, type?: 1 | 2 | 3, size?: 20 | 30 | 40) => {
    return {
        productId,
        size,
        type,
        price: randomNumber(190, 600),
        // carbs: randomNumber(10, 30),
        // fats: randomNumber(5, 15),
        // kcal: randomNumber(180, 300),
        // proteins: randomNumber(20, 45),
        // weight: randomNumber(400, 650),
    } as Prisma.ProductItemUncheckedCreateInput
};

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
    await prisma.ingredient.createMany({
        data: ingredients
    })
    await prisma.product.createMany({
        data: products
    })

    const pizza1 = await prisma.product.create({
        data: {
            name: 'Pepperoni fresh',
            imageUrl: '',
            categoryId: 1,
            ingredients: {
                connect: ingredients.slice(0, 5)
            }
        }
    })

    const pizza2 = await prisma.product.create({
        data: {
            name: 'Cheese',
            imageUrl: '',
            categoryId: 1,
            ingredients: {
                connect: ingredients.slice(5, 10)
            }
        }
    })

    const pizza3 = await prisma.product.create({
        data: {
            name: 'Chorizo fresh',
            imageUrl: '',
            categoryId: 1,
            ingredients: {
                connect: ingredients.slice(10, 40)
            }
        }
    })

    await prisma.productItem.createMany({
        data: [
            generatePizza(1, 1, 20),
            generatePizza(1, 2, 30),
            generatePizza(1, 3, 40),

            generatePizza(2, 1, 20),
            generatePizza(2, 2, 30),
            generatePizza(2, 3, 40),

            generatePizza(3, 1, 20),
            generatePizza(3, 2, 30),
            generatePizza(3, 3, 40),

            generatePizza(1),
            generatePizza(2),
            generatePizza(3),
            generatePizza(4),
            generatePizza(5),
            generatePizza(6),
            generatePizza(7),
            generatePizza(8),
            generatePizza(9),
            generatePizza(10),
            generatePizza(11),
            generatePizza(12),
            generatePizza(13),
            generatePizza(14),
            generatePizza(15),
            generatePizza(16),
            generatePizza(17),
        ]
    })

    await prisma.cart.createMany({
        data: [
            {
                userId:1,
                totalAmount:0,
                token:'123',

            },
            {
                userId:2,
                totalAmount:0,
                token:'321',

            }
        ]
    })

    await prisma.cartItem.createMany({
        data:[
            // {
            //     productItemId:1
            // }
        ]
    })


}

async function down() {
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE;`
    await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE;`
    await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE;`
    await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE;`
    await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE;`
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
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })