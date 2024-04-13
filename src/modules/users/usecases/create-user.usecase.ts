import { User } from "@prisma/client";
import { prisma } from '../../../configs/database/prisma.connection';
import { ResponseDTO } from '../../../configs/dtos/response.dto';
import { CreateUserDTO } from "../dtos/create-user.dto";

export class CreateUserUseCase {
    async execute({name, email}:CreateUserDTO): Promise<ResponseDTO<User>>{
        //Verificar se o usuário já existe
        const userAlredyExists = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if(userAlredyExists){
           return {
                code: 400,
                success: false,
                message: "Email já cadastrado",
           }
        }

        //Criar o usuário
        const user = await prisma.user.create({
            data:{
                name,
                email
            }
        })

        return {
            code: 201,
            success: true,
            message: "Usuário cadastrado com sucesso",
            data: user
        }
    }
}