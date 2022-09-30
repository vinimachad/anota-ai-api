import { Request, Response } from "express"
import { container } from "tsyringe"
import { CreateMenuUseCase } from "./CreateMenuUseCase"

export default async function createMenuHandle(req: Request, res: Response) {
    const restaurant_id = req.query["restaurant_id"] as string
    const useCase = container.resolve(CreateMenuUseCase)
    const result = await useCase.execute(restaurant_id)
    return res.json(result)
}