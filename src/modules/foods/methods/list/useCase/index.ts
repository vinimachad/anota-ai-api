import { inject, injectable } from "tsyringe";
import { IFoodRepository } from "../../../repository/FoodRepository";

@injectable()
export class UseCase {

    private repository: IFoodRepository

    constructor(
        @inject('FoodRepository')
        repository: IFoodRepository) {
        this.repository = repository
    }

    async execute(restaurant_id: string) {
        return await this.repository.list(restaurant_id)
    }
}