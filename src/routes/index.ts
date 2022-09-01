import { Router } from "express";
import { restaurantRoutes } from "./restaurant.routes";
import { userRoutes } from "./user.routes";

export const routes = Router()

routes.use('/', userRoutes)
routes.use('/restaurant', restaurantRoutes)