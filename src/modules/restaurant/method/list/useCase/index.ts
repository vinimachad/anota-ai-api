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
        return await this.repository.list()
    }
}