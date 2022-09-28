import { Request, Response } from "express"
import { container } from "tsyringe"
import { UseCase } from "../useCase"

export default async function findRestaurantByIdHandle(req: Request, res: Response) {
    const id = req.query["id"] as string
    const useCase = container.resolve(UseCase)
    const restaurant = await useCase.execute(id)
    return res.json(restaurant)
}