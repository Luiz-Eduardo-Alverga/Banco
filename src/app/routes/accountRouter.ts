import { Router } from "express";
import { AccountController } from "../controllers/AccountController";

const router = Router()
const accountController = new AccountController()

router.post('/create',accountController.handle)

export default router
