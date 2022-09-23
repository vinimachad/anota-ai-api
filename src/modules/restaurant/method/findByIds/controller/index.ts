import { Request, Response } from "express"
import { container } from "tsyringe"
import { UseCase } from "../useCase"

export default async function handle(req: Request, res: Response) {
    const { id } = req.body
    const useCase = container.resolve(UseCase)
    const restaurant = await useCase.execute(id)
    return res.json(restaurant)
}