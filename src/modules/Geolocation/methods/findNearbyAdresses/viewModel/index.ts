import { container, injectable } from "tsyringe"
import { AppError } from "../../../../../errors/AppError"
import findDistance from "../../../../../helpers/findDistance"
import { Address } from "../../../entities/Address"
import { UseCase } from "../useCase"
import { UseCase as FindRestaurantByIdUseCase } from "../../../../restaurant/method/findById/useCase"

type Request = {
    max_distance: string
    lat: string,
    long: string
}

@injectable()
export class ViewModel {

    useCase = container.resolve(UseCase)
    findRestaurantByIdUseCase = container.resolve(FindRestaurantByIdUseCase)

    async nearbyRestaurantValidate(req: Request) {
        let adresses = await this.getAdresses()
        let currentGeo = {
            lat: Number(req.lat),
            long: Number(req.long)
        }

        let restaurantDistances = adresses.flatMap(address => {
            var distance = 0

            if (address.lat != null && address.long != null) {
                distance = findDistance({
                    currentGeo, restaurantGeo: {
                        lat: Number(address.lat),
                        long: Number(address.long)
                    }
                })

                return {
                    id: address.restaurantId,
                    distance
                }
            }

            return {
                id: "",
                distance
            }
        })

        let restaurants = restaurantDistances.map(restaurant => {
            if (restaurant.distance <= Number(req.max_distance) && restaurant.distance > 0) {
                return restaurant.id
            }
        })


        return restaurants
    }

    async findNearbyRestaurants(req: Request) {
        let restaurantIds = await this.nearbyRestaurantValidate(req)
        return await this.findRestaurantByIdUseCase.execute(restaurantIds)
    }

    async getAdresses(): Promise<Address[]> {
        return await this.useCase.execute()
    }
}