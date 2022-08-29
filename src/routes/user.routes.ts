import { Router } from "express";
import { CreateUserController } from "../modules/users/methods/create/CreateUserController";
import login from '../modules/users/methods/auth/AuthenticateUserController'
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { RefreshTokenController } from "../modules/users/methods/refreshToken/RefreshTokenController";
import { Controller as AddressController } from "../modules/Geolocation/methods/get/controller"
import { Controller as CreateAddressController } from "../modules/Geolocation/methods/create/controller";

export const userRoutes = Router()

const createUser = new CreateUserController()
const refreshTokenController = new RefreshTokenController()
const getAddressController = new AddressController()
const createAddressController = new CreateAddressController()

userRoutes.post('/sign-up', createUser.handle)
userRoutes.post('/login', login.handle)
userRoutes.post('/refresh-token', refreshTokenController.handle)

userRoutes.get('/address', ensureAuthenticated, getAddressController.handle)
userRoutes.post('/address', ensureAuthenticated, createAddressController.handle)