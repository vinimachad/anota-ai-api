import { inject, injectable } from "tsyringe";
import { DetailDTO, IRestaurantRepository } from "../../../../repository/RestaurantRepository";

@injectable()
export class UseCase {

    private repository: IRestaurantRepository

    constructor(
        @inject('RestaurantRepository')
        repository: IRestaurantRepository) {
        this.repository = repository
    }

    async execute(data: DetailDTO) {
        let restaurant = await this.repository.findById(data.restaurant_id)
        return await this.repository.updateDetails(restaurant)
    }
}