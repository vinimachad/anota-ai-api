import { Router } from "express";
import { CreateUserController } from "../modules/users/methods/create/CreateUserController";
import login from '../modules/users/methods/auth/AuthenticateUserController'
import ListUsers from '../modules/users/methods/list/Controller'
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { RefreshTokenController } from "../modules/users/methods/refreshToken/RefreshTokenController";
import { Controller as ListCoordinateController } from "../modules/Coordinates/methods/list/controller";

export const userRoutes = Router()

const createUser = new CreateUserController()
const listUsers = new ListUsers()
const refreshTokenController = new RefreshTokenController()
const listCoordinateController = new ListCoordinateController()

userRoutes.post('/sign-up', createUser.handle)
userRoutes.post('/login', login.handle)
userRoutes.get('/', ensureAuthenticated, listUsers.handle)
userRoutes.post('/refresh-token', refreshTokenController.handle)
userRoutes.get('/coordinates', ensureAuthenticated, listCoordinateController.handle)