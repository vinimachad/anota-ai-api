import { Request, Response } from "express"
import { container } from "tsyringe"
import { UseCase } from "./UseCase"

export class Controller {
    async handle(req: Request, res: Response) {
        const { name, latitude, longitude } = req.body
        const user_id = req.query.user_id as string
        const useCase = container.resolve(UseCase)
        const coordinate = await useCase.execute({ name, latitude, longitude, user_id })
        return res.json(coordinate)
    }
}   