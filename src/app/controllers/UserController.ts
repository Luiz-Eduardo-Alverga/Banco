import { Request,Response,Router } from "express";
import { User } from "../entities/UserEntitie";
import { CreateUserService } from "../services/CreateUserService";


class UserController {

  async handle(request:Request,response:Response){

    const { name, cpf, conta } = request.body

    const createUserService = new CreateUserService()

    const user = await createUserService.execute({ name, cpf, conta })

    return response.json(user)
  }
}

export { UserController }
