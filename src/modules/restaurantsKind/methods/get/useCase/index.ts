import { inject, injectable } from "tsyringe";
import { IRestaurantKindRepository } from "../../../repository/RestaurantKindRepository";

@injectable()
export class UseCase {

    private repository: IRestaurantKindRepository

    constructor(
        @inject('RestaurantKindRepository')
        repository: IRestaurantKindRepository) {
        this.repository = repository
    }

    async execute() {
        return await this.repository.list()
    }
}