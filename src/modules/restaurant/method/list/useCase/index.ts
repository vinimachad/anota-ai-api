import { inject, injectable } from "tsyringe";
import { IRestaurantRepository } from "../../../repository/RestaurantRepository";

@injectable()
export class UseCase {

    private repository: IRestaurantRepository

    constructor(
        @inject('RestaurantRepository')
        repository: IRestaurantRepository) {
        this.repository = repository
    }

    async execute() {
        let restaurants = await this.repository.list()
        console.log(restaurants);
        return restaurants
    }
}