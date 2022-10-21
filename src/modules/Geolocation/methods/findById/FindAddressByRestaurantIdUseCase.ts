import { inject, injectable } from "tsyringe";
import { IGeolocationRepository } from "../../repositories/GeolocationRepository";

@injectable()
export class FindAddressByRestaurantIdUseCase {

    private repository: IGeolocationRepository

    constructor(
        @inject('GeolocationRepository')
        repository: IGeolocationRepository) {
        this.repository = repository
    }

    async execute(restaurant_id: string) {
        return await this.repository.findByRestaurantId(restaurant_id)
    }
}