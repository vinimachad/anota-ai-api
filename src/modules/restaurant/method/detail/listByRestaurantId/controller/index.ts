import { Request, Response } from "express"
import { container } from "tsyringe"
import { UseCase } from "../useCase"

export default async function listDetailsByRestaurantId(req: Request, res: Response) {
    const restaurant_id = req.query["restaurant_id"] as string
    const useCase = container.resolve(UseCase)
    const details = await useCase.execute(restaurant_id)
    return res.json(details)
}