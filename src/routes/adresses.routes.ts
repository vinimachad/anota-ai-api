import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import userHasAddressHandle from "../modules/Geolocation/methods/userHasAddress/controller";
import { Controller as AddressController } from "../modules/Geolocation/methods/get/controller"
import { Controller as CreateAddressController } from "../modules/Geolocation/methods/create/controller";

export const adressesRoutes = Router()
const getAddressController = new AddressController()
const createAddressController = new CreateAddressController()

adressesRoutes.get("/user-addresses", ensureAuthenticated, userHasAddressHandle)
adressesRoutes.get('/', ensureAuthenticated, getAddressController.handle)
adressesRoutes.post('/', ensureAuthenticated, createAddressController.handle)