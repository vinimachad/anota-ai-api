import { Request, Response } from "express"
import { container } from "tsyringe"
import { RefreshTokenUseCase } from "./RefreshTokenUseCase"

export class RefreshTokenController {
    async handle(req: Request, res: Response) {
        const { token } = req.body || req.headers["x-access-token"] || req.query.token
        const useCase = container.resolve(RefreshTokenUseCase)
        const refresh_token = await useCase.execute(token)
        return res.json(refresh_token)
    }
}   