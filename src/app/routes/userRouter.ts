import { Router } from "express";
import { UserController } from "../controllers/UserController";

const router = Router()

//Rotas de Usuarios
const userCrontoller = new UserController()

router.post('/create',userCrontoller.handle)

export default router
