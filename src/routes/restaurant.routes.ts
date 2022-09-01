import { Router } from "express"
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated"
import { Controller as CreateFoodController } from "../modules/foods/methods/create/controller"
import ListFoodsController from "../modules/foods/methods/list/controller"
import { Controller as CreateController } from "../modules/restaurant/method/create/controller"
import listRestaurantsHandle from "../modules/restaurant/method/list/controller"

export const restaurantRoutes = Router()

const createRestaurantController = new CreateController()
const createFoodController = new CreateFoodController()
const listFoods = new ListFoodsController

restaurantRoutes.post('/', createRestaurantController.handle)
restaurantRoutes.post('/food', createFoodController.handle)
restaurantRoutes.get('/food', listFoods.handle)
restaurantRoutes.get('/', ensureAuthenticated, listRestaurantsHandle)