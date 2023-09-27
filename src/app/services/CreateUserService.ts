import IUSer from "../interfaces/IUser";
import { User } from "../entities/UserEntitie";
import { AppDataSource } from "../../database/data-source";

class CreateUserService {

  async execute ({ name, cpf, conta }: IUSer ) {

    const userRepository = AppDataSource.getRepository(User)

    if(!cpf) {
      throw new Error('CPF invlido')
    }

    const userAlreadyExist = await userRepository.findOne({
      where: {
        cpf:cpf
      }
    })

    if(userAlreadyExist) {
      throw new Error('Usario já existe')
    }

    const user = userRepository.create({
      name,
      cpf,
      conta
    })

    await userRepository.save(user)

    return user
  }
}

export { CreateUserService }
