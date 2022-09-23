import { Router } from "express";
import { evaluationRoutes } from "./evaluation.routes";
import { restaurantRoutes } from "./restaurant.routes";
import { userRoutes } from "./user.routes";

export const routes = Router()

routes.use('/', userRoutes)
routes.use('/restaurant', restaurantRoutes)
routes.use('/evaluation', evaluationRoutes)