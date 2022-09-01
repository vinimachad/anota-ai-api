import { container, injectable } from "tsyringe"
import { AppError } from "../../../../../errors/AppError"
import { FoodDTO } from "../../../repository/FoodRepository"
import { UseCase } from "../useCase"

@injectable()
export class ViewModel {

    async createFood(req: FoodDTO) {

        if (req.description == "" || req.name == "" || req.preview_url == "" || !req.price || req.restaurant_id == "" || req.type == "") {
            throw new AppError("Todos os campos devem ser preenchidos", 400)
        }

        let useCase = container.resolve(UseCase)
        return await useCase.execute(req)
    }
}