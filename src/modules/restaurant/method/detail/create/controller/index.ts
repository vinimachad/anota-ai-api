import { Request, Response } from "express"
import { container } from "tsyringe"
import { UseCase } from "../useCase"

export default async function createDetailHandle(req: Request, res: Response) {
    const { restaurant_id, results } = req.body
    const useCase = container.resolve(UseCase)
    const detail = await useCase.execute({ restaurant_id, results })
    return res.json(detail)
}