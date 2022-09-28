import { Request, Response } from "express"
import { container } from "tsyringe"
import FindAvaliationsByRestaurantIdUseCase from "./findByRestaurantIdUseCase"

export default async function findAvaliationsByRestaurantIdHandle(req: Request, res: Response) {
    const restaurant_id = req.query["restaurant_id"] as string
    const useCase = container.resolve(FindAvaliationsByRestaurantIdUseCase)
    const avaliations = await useCase.execute(restaurant_id)
    return res.json(avaliations)
}