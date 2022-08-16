import { Request, Response } from "express"
import { container } from "tsyringe"
import { CreateUserViewModel } from "./CreateUserViewModel"

export class CreateUserController {
    async handle(req: Request, res: Response) {
        const { name, last_name, password, email, latitude, longitude, coordinate_name } = req.body
        const viewModel = container.resolve(CreateUserViewModel)
        const user = await viewModel.userExistsValidation({ name, last_name, password, email, latitude, longitude, coordinate_name })
        return res.json(user)
    }
}   