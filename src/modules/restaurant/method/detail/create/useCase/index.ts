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
        return await this.repository.updateDetails(data)
    }
}