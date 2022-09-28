import { container, inject, injectable } from "tsyringe";
import UpdateEvaluationUseCase from "../../../../restaurant/method/updateEvaluation";
import { UseCase as FindRestaurantByIdUseCase } from '../../../../restaurant/method/restaurant/findById/useCase'
import { AvaliationDTO, IAvaliationRepository } from "../../../repository/AvaliationRepository";

@injectable()
export class UseCase {

    private repository: IAvaliationRepository
    updateEvaluationUseCase = container.resolve(UpdateEvaluationUseCase)
    findRestaurantByIdUseCase = container.resolve(FindRestaurantByIdUseCase)

    constructor(
        @inject('AvaliationRepository')
        repository: IAvaliationRepository) {
        this.repository = repository
    }

    async execute(req: AvaliationDTO) {
        let evaluation = await this.repository.create(req)
        let restaurant = await this.findRestaurantByIdUseCase.execute(req.restaurant_id)
        restaurant.updateEvaluation()
        await this.updateEvaluationUseCase.execute(restaurant)
        return evaluation
    }
}