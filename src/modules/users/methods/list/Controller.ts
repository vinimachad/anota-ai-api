import { Request, Response } from "express"
import { container } from "tsyringe"
import ListUserUseCase from './UseCase'

export default class Controller {
    async handle(req: Request, res: Response) {
        const useCase = container.resolve(ListUserUseCase)
        const users = await useCase.execute()
        return res.json(users)
    }
}   