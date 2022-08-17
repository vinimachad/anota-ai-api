import { Request, Response } from "express"
import { container } from "tsyringe"
import { UseCase } from "./useCase"

export class Controller {
    async handle(req: Request, res: Response) {
        const user_id = req.headers['user_id'] as string
        const useCase = container.resolve(UseCase)
        const coordinate = await useCase.execute(user_id)
        return res.json(coordinate)
    }
}   