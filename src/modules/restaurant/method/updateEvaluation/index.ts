import { inject, injectable } from "tsyringe";
import { Restaurant } from "../../entities/Restaurant";
import { IRestaurantRepository } from "../../repository/RestaurantRepository";

@injectable()
export default class UpdateEvaluationUseCase {

    private repository: IRestaurantRepository

    constructor(
        @inject('RestaurantRepository')
        repository: IRestaurantRepository) {
        this.repository = repository
    }

    async execute(restaurant: Restaurant) {
        return await this.repository.updateEvaluation(restaurant)
    }
}