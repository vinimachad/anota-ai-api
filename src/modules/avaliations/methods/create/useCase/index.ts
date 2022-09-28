import { container, inject, injectable } from "tsyringe";
import UpdateEvaluationUseCase from "../../../../restaurant/method/updateEvaluation";
import { AvaliationDTO, IAvaliationRepository } from "../../../repository/AvaliationRepository";
import FindAvaliationsByRestaurantIdUseCase from "../../findByRestaurantId/findByRestaurantIdUseCase";

@injectable()
export class UseCase {

    private repository: IAvaliationRepository
    updateEvaluationUseCase = container.resolve(UpdateEvaluationUseCase)
    findAvaliationByRestaurantId = container.resolve(FindAvaliationsByRestaurantIdUseCase)

    constructor(
        @inject('AvaliationRepository')
        repository: IAvaliationRepository) {
        this.repository = repository
    }

    async execute(req: AvaliationDTO) {
        let evaluation = await this.repository.create(req)
        let avaliations = await this.findAvaliationByRestaurantId.execute(req.restaurant_id)

        await this.updateEvaluationUseCase.execute(avaliations, req.restaurant_id)
        return evaluation
    }
}