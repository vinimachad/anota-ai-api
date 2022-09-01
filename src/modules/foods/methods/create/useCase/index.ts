import { inject, injectable } from "tsyringe";
import { FoodDTO, IFoodRepository } from "../../../repository/FoodRepository";

@injectable()
export class UseCase {

    private repository: IFoodRepository

    constructor(
        @inject('FoodRepository')
        repository: IFoodRepository) {
        this.repository = repository
    }

    async execute(data: FoodDTO) {
        return await this.repository.create(data)
    }
}