import { Router } from "express";
import { adressesRoutes } from "./adresses.routes";
import { evaluationRoutes } from "./evaluation.routes";
import { restaurantRoutes } from "./restaurant.routes";
import { userRoutes } from "./user.routes";

export const routes = Router()

routes.use('/', userRoutes)
routes.use('/restaurant', restaurantRoutes)
routes.use('/evaluation', evaluationRoutes)
routes.use('/address', adressesRoutes) 