import { inject, injectable } from "tsyringe";
import { IRestaurantRepository } from "../../../repository/RestaurantRepository";

type Request = {
    name: string
}

@injectable()
export class UseCase {

    private repository: IRestaurantRepository

    constructor(
        @inject('RestaurantRepository')
        repository: IRestaurantRepository) {
        this.repository = repository
    }

    async execute(req: Request) {
        return await this.repository.create(req)
    }
}