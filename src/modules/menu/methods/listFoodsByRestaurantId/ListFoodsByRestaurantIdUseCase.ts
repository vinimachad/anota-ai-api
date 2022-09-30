import { inject, injectable } from "tsyringe";
import { IMenuRepository } from "../../repositories/MenuRepository";

@injectable()
export class ListFoodsByRestaurantIdUseCase {

    private repository: IMenuRepository

    constructor(
        @inject('MenuRepository')
        repository: IMenuRepository) {
        this.repository = repository
    }

    async execute(restaurant_id: string) {
        return await this.repository.listFoodsByRestaurantId(restaurant_id)
    }
}