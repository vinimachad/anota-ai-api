import { Request, Response } from "express"
import { container } from "tsyringe"
import { UseCase } from "../useCase"

export default class Controller {
    async handle(req: Request, res: Response) {
        const restaurant_id = req.headers["restaurant_id"] as string
        const useCase = container.resolve(UseCase)
        const foods = await useCase.execute(restaurant_id)
        return res.json(foods)
    }
}   