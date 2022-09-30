import { Request, Response } from "express"
import { container } from "tsyringe"
import { ListFoodsByRestaurantIdUseCase } from "./ListFoodsByRestaurantIdUseCase"

export default async function listFoodsByRestaurantIdHandle(req: Request, res: Response) {
    const restaurant_id = req.query['restaurant_id'] as string
    const useCase = container.resolve(ListFoodsByRestaurantIdUseCase)
    const result = await useCase.execute(restaurant_id)
    return res.json(result)
}