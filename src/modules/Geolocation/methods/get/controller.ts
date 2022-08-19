import { Request, Response } from "express"
import { container } from "tsyringe"
import { ViewModel } from "./viewModel"

export class Controller {
    async handle(req: Request, res: Response) {
        const { lat, long } = req.query
        const viewModel = container.resolve(ViewModel)
        const address = await viewModel.getGeolocation(lat as string, long as string)
        return res.json(address)
    }
}   