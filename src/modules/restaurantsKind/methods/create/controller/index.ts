import { Request, Response } from "express"
import { container } from "tsyringe"
import { UseCase } from "../useCase"

export default async function handle(req: Request, res: Response) {
    const { type } = req.body
    const useCase = container.resolve(UseCase)
    const restaurantKind = await useCase.execute(type)
    return res.json(restaurantKind)
}
