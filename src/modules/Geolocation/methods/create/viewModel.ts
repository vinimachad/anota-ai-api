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
    user_id: string
}

@injectable()
export class ViewModel {

    async createGeolocation(request: IGeoRequest) {
        let useCase = container.resolve(UseCase)
        return useCase.execute(request)
    }
}