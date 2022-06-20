const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

exports.handler = async (event, context, callback) => {
    try {
        const { id } = event.pathParameters;

        const user = await prisma.user.findUnique({where:{id: parseInt(id)}})

        // const users = await prisma.user.findMany({
        //   include: { profile: true }
        // })
        return {
            statusCode: 200,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        }
    } catch (error) {
        console.error(error)
        return {
            statusCode: 500,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(error)
        }
    }
}
