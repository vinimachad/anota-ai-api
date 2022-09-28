import { inject, injectable } from "tsyringe"
import { IRestaurantRepository } from "../../../../repository/RestaurantRepository"


@injectable()
export class UseCase {

    private repository: IRestaurantRepository

    constructor(
        @inject('RestaurantRepository')
        repository: IRestaurantRepository) {
        this.repository = repository
    }

    async execute(id: string, relations?: string[]) {
        return await this.repository.findById(id, relations)
    }
}