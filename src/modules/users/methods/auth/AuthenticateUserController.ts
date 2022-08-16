import { Request, Response } from "express"
import { container } from "tsyringe"
import { AuthenticateUserViewModel } from "./AuthenticateUserViewModel"

class AuthenticatedUserController {
    async handle(req: Request, res: Response) {
        const { email, password } = req.body
        const viewModel = container.resolve(AuthenticateUserViewModel)
        const user = await viewModel.validateCredentials(email, password)
        return res.json(user)
    }
}

export default new AuthenticatedUserController()