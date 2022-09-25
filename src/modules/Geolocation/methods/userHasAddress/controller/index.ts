import { Request, Response } from "express"
import { container } from "tsyringe"
import { ViewModel } from "../viewModel"

export default async function userHasAddressHandle(req: Request, res: Response) {
    const user_id = req.query["user_id"] as string
    const viewModel = container.resolve(ViewModel)
    const hasAddress = await viewModel.userHasAddress(user_id)
    return res.json(hasAddress)
}