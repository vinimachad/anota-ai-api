import { container, injectable } from "tsyringe"
import { UseCase } from "./useCase"

type IGeoRequest = {
    street_number: string
    street: string
    district: string
    city: string
    state: string
    country: string
    postal_code: string
    formatted_address: string
    user_id?: string
    restaurant_id?: string
    coordinate: { lat: string, long: string }
}

@injectable()
export class ViewModel {

    async createGeolocation(request: IGeoRequest) {
        let useCase = container.resolve(UseCase)

        if (!request.user_id && request.restaurant_id) {
            return useCase.execute({ ...request, user_id: null })
        }

        if (!request.restaurant_id && request.user_id) {
            return useCase.execute({ ...request, restaurant_id: null })
        }
    }
}