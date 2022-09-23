import { Request, Response } from "express"
import { container } from "tsyringe"
import { UseCase } from "../useCase"

export default async function handle(req: Request, res: Response) {
    const { restaurant_id, user_id, points, description } = req.body
    const useCase = container.resolve(UseCase)
    const evaluation = await useCase.execute({ restaurant_id, user_id, points, description })
    return res.json(evaluation)
}