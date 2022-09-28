import { inject, injectable } from "tsyringe";
import { Avaliation } from "../../../avaliations/entities/Avaliation";
import { IRestaurantRepository } from "../../repository/RestaurantRepository";

@injectable()
export default class UpdateEvaluationUseCase {

    private repository: IRestaurantRepository

    constructor(
        @inject('RestaurantRepository')
        repository: IRestaurantRepository) {
        this.repository = repository
    }

    async execute(avaliations: Avaliation[], restaurant_id: string) {
        return await this.repository.updateEvaluation(restaurant_id, this.updateEvaluation(avaliations))
    }

    private updateEvaluation(avaliations: Avaliation[]) {
        let points = avaliations.map(evaluations => {
            return evaluations.points
        })

        var sumValue = 0
        points.forEach(point => {
            sumValue += point
        })

        return sumValue / points.length
    }
}