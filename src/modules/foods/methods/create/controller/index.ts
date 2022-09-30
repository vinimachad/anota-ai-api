import { Request, Response } from "express"
import { container } from "tsyringe"
import { ViewModel } from "../viewModel"

export class Controller {
    async handle(req: Request, res: Response) {
        const { name, type, price, preview_url, description } = req.body
        const menu_id = req.query["menu_id"] as string
        const viewModel = container.resolve(ViewModel)
        const Var = await viewModel.createFood({ name, type, price, preview_url, description, menu_id })
        return res.json(Var)
    }
}   