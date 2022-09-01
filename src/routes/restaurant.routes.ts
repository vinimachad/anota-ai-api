import { Router } from "express"
import { Controller as CreateController } from "../modules/restaurant/method/create/controller"

export const restaurantRoutes = Router()

const createRestaurantController = new CreateController()

restaurantRoutes.post('/', createRestaurantController.handle)