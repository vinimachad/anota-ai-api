import { inject, injectable } from "tsyringe";
import { IAvaliationRepository } from "../../repository/AvaliationRepository";

@injectable()
export default class FindAvaliationsByRestaurantIdUseCase {

    private repository: IAvaliationRepository

    constructor(
        @inject('AvaliationRepository')
        repository: IAvaliationRepository) {
        this.repository = repository
    }

    async execute(id: string) {
        return await this.repository.findByRestaurantId(id)
    }
}