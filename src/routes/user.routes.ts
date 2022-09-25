import { Router } from "express";
import { CreateUserController } from "../modules/users/methods/create/CreateUserController";
import login from '../modules/users/methods/auth/AuthenticateUserController'
import { RefreshTokenController } from "../modules/users/methods/refreshToken/RefreshTokenController";


export const userRoutes = Router()

const createUser = new CreateUserController()
const refreshTokenController = new RefreshTokenController()


userRoutes.post('/sign-up', createUser.handle)
userRoutes.post('/login', login.handle)
userRoutes.post('/refresh-token', refreshTokenController.handle)