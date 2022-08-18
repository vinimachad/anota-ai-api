import { Request, Response } from "express"
import { container } from "tsyringe"
import { ViewModel } from "./viewModel"

export class Controller {
    async handle(req: Request, res: Response) {
        const { lat, long } = req.body
        const viewModel = container.resolve(ViewModel)
        const address = await viewModel.getGeolocation(lat, long)
        return res.json(address)
    }
}   