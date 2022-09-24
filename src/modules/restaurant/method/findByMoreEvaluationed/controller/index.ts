import { Request, Response } from "express"
import { container } from "tsyringe"
import { UseCase } from "../useCase"

export default async function findByMoreEvaluationedHandle(req: Request, res: Response) {
    const useCase = container.resolve(UseCase)
    const restaurants = await useCase.execute()
    return res.json(restaurants)
}
