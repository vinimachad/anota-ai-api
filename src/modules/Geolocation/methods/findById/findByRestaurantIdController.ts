import { Request, Response } from "express"
import { container } from "tsyringe"
import { FindAddressByRestaurantIdUseCase } from "./FindAddressByRestaurantIdUseCase"

export default async function findAddressByRestaurantIdHandle(req: Request, res: Response) {
    const restaurant_id = req.query["restaurant_id"] as string
    const useCase = container.resolve(FindAddressByRestaurantIdUseCase)
    const result = await useCase.execute(restaurant_id)
    return res.json(result)
}