import { Request, Response } from "express"
import { container } from "tsyringe"
import { UseCase } from "../useCase"

export default async function handle(req: Request, res: Response) {
    const useCase = container.resolve(UseCase)
    const restaurants = await useCase.execute()
    return res.json(restaurants)
}
