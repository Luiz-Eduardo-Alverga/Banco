import { Account } from "../entities/AccountEntitie";
import IAccount from "../interfaces/IAccount";
import { AppDataSource } from "../../database/data-source";
import { User } from "../entities/UserEntitie";


class CreateAccountService {

  async execute({ user_id, saldo }: IAccount){

    const userRepository = AppDataSource.getRepository(User)
    const accountRepository = AppDataSource.getRepository(Account)

    const userExists =  await userRepository.findOne({
      where: {
        id:user_id
      }
    })

    if(!userExists){
      throw new Error('Usuario nao existe na base de dados')
    }

    if(saldo < 0){
      throw new Error('Você não pode informar um valor negativo para o saldo inicial')
    }

    const account = accountRepository.create({
      user_id,
      saldo,
    })

    await accountRepository.save(account)

    return account

  }
}

export { CreateAccountService }
