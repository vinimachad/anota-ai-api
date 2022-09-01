import { Router } from "express"
import { Controller as CreateFoodController } from "../modules/foods/methods/create/controller"
import { Controller as CreateController } from "../modules/restaurant/method/create/controller"

export const restaurantRoutes = Router()

const createRestaurantController = new CreateController()
const createFoodController = new CreateFoodController()

restaurantRoutes.post('/', createRestaurantController.handle)
restaurantRoutes.post('/food', createFoodController.handle)