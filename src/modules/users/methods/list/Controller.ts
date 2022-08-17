import { Request, Response } from "express"
import { container } from "tsyringe"
import UseCase from "./UseCase"

export default class Controller {
    async handle(req: Request, res: Response) {
        const useCase = container.resolve(UseCase)
        const users = await useCase.execute()
        return res.json(users)
    }
}   