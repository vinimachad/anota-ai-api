import { Request, Response } from "express"
import { container } from "tsyringe"
import { ViewModel } from "./viewModel"

export class Controller {
    async handle(req: Request, res: Response) {
        const { street_number, street, district, city, state, country, postal_code, formatted_address, coordinate } = req.body
        const user_id = req.headers["user_id"] as string
        const restaurant_id = req.headers["restaurant_id"] as string
        const viewModel = container.resolve(ViewModel)
        const address = await viewModel.createGeolocation({ street_number, street, district, city, state, country, postal_code, formatted_address, user_id, restaurant_id, coordinate })
        return res.json(address)
    }
}   