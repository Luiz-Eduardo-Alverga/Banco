import { Request,Response } from "express";
import { CreateAccountService } from "../services/AccountService";

class AccountController {

  async handle(request: Request,response: Response) {

    const { user_id, saldo } = request.body

    const createAccountService = new CreateAccountService()

    const account = await createAccountService.execute({saldo,user_id})

    return response.json(account)
  }
}

export { AccountController }
