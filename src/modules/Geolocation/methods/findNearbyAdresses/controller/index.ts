import { Request, Response } from "express"
import { container } from "tsyringe"
import { ViewModel } from "../viewModel"

export default async function handle(req: Request, res: Response) {
    const { lat, long, max_distance } = req.query

    const viewModel = container.resolve(ViewModel)
    const restaurants = await viewModel.findNearbyRestaurants({
        lat: lat as string,
        long: long as string,
        max_distance: max_distance as string
    })
    return res.json(restaurants)
}