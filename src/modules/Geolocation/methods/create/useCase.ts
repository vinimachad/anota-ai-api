import { inject, injectable } from "tsyringe";
import { IGeolocationRepository } from "../../repositories/GeolocationRepository";

type IRequest = {
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
}

@injectable()
export class UseCase {

    private repository: IGeolocationRepository

    constructor(
        @inject('GeolocationRepository')
        repository: IGeolocationRepository) {
        this.repository = repository
    }

    async execute(address: IRequest) {
        return await this.repository.create(address)
    }
}