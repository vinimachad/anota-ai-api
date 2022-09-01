import { container, injectable } from "tsyringe"
import { AppError } from "../../../../../errors/AppError"
import { UseCase } from "../useCase"

type Request = {
    name: string
    price: number
    avatar_url: string
    type: string
}

@injectable()
export class ViewModel {

    async validateFields(req: Request) {

        if (req.name === "") {
            throw new AppError("Nome do restaurante deve ser preenchido!", 400)
        }

        return this.createRestaurant(req)
    }

    private async createRestaurant(req: Request) {
        let useCase = container.resolve(UseCase)
        return await useCase.execute(req)
    }
}