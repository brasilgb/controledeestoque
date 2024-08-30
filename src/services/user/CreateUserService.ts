import prismaClient from "../../prisma";
import { hash } from "bcrypt";
import { UserRequest } from "../../models/interfaces/user/UserRequest";
class CreateUserService {
    async execute({ name, email, password }: UserRequest) {
        if (!email) {
            throw new Error("Email incorret");
        }

        const userAlreadyExists = await prismaClient.user.findFirst({
            where: { 
                email: email
            }
        })

        if(userAlreadyExists) {
            throw new Error("Email already exists");
        }

        // Encriptar nossa senha
        const passwordHash = await hash(password, 8);

        // Criar usuário
        const user = prismaClient.user.create({
            data: {
                name: name,
                email: email,
                password: passwordHash
            },
            select: {
                id: true,
                name: true,
                email: true
            }
        })


    }
}

export { CreateUserService }