import { Request, Response } from "express"
import { container } from "tsyringe"
import { ViewModel } from "../viewModel"

export class Controller {
    async handle(req: Request, res: Response) {
        const { name, price, avatar_url, type } = req.body
        const viewModel = container.resolve(ViewModel)
        const restaurant = await viewModel.validateFields({ name, price, avatar_url, type })
        return res.json(restaurant)
    }
}   