import { Router } from "express"
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated"
import { Controller as CreateFoodController } from "../modules/foods/methods/create/controller"
import ListFoodsController from "../modules/foods/methods/list/controller"
import listAddressNearby from "../modules/Geolocation/methods/findNearbyAdresses/controller"
import { Controller as CreateController } from "../modules/restaurant/method/create/controller"
import findByMoreEvaluationedHandle from "../modules/restaurant/method/findByMoreEvaluationed/controller"
import listRestaurantsHandle from "../modules/restaurant/method/list/controller"
import createRestaurantKindHandle from "../modules/restaurantsKind/methods/create/controller"
import listRestaurantKindHandle from "../modules/restaurantsKind/methods/get/controller"

export const restaurantRoutes = Router()

const createRestaurantController = new CreateController()
const createFoodController = new CreateFoodController()
const listFoods = new ListFoodsController

restaurantRoutes.post('/', createRestaurantController.handle)
restaurantRoutes.post('/food', createFoodController.handle)
restaurantRoutes.get('/food', listFoods.handle)
restaurantRoutes.get('/', ensureAuthenticated, listRestaurantsHandle)

restaurantRoutes.post('/kinds', ensureAuthenticated, createRestaurantKindHandle)
restaurantRoutes.get('/kinds', ensureAuthenticated, listRestaurantKindHandle)

restaurantRoutes.get('/near', ensureAuthenticated, listAddressNearby)

restaurantRoutes.get('/bestRated', ensureAuthenticated, findByMoreEvaluationedHandle)