import jwt from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { User } from "../../entities/User";
import { IRefreshTokenRepository } from "../../repositories/RefreshTokenRepository";

@injectable()
export class AuthenticateUserUseCase {

    private refreshTokenRepo: IRefreshTokenRepository

    constructor(
        @inject('RefreshTokenRepository') refreshTokenRepo: IRefreshTokenRepository
    ) {
        this.refreshTokenRepo = refreshTokenRepo
    }

    async execute(user: User) {
        let token = jwt.sign({}, process.env.SECRET_TOKEN, { subject: user.id, expiresIn: '15m' })
        let refresh_token = jwt.sign(
            { email: user.email },
            process.env.SECRET_REFRESH_TOKEN,
            { subject: user.id, expiresIn: '30d' }
        )

        await this.refreshTokenRepo.create({ expires_date: '30d', refresh_token, user_id: user.id })

        return {
            name: user.name,
            email: user.email,
            id: user.id,
            refresh_token
        }
    }
}