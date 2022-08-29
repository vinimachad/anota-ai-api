import { container, inject, injectable } from "tsyringe";
import { IUserRepository } from "../../repositories/UserRepository";
import jwt from 'jsonwebtoken'
import { IRefreshTokenRepository } from "../../repositories/RefreshTokenRepository";

type IData = {
    name: string
    last_name: string
    password: string
    email: string
}

@injectable()
export class CreateUserUseCase {

    private repository: IUserRepository
    private refreshTokenRepo: IRefreshTokenRepository

    constructor(
        @inject('UserRepository') repository: IUserRepository,
        @inject('RefreshTokenRepository') refreshTokenRepo: IRefreshTokenRepository,
    ) {
        this.repository = repository
        this.refreshTokenRepo = refreshTokenRepo
    }

    async execute(data: IData) {

        let user = await this.repository.create(data)

        let token = jwt.sign({}, process.env.SECRET_TOKEN, { subject: user.id, expiresIn: '15m' })
        let refresh_token = jwt.sign(
            { email: user.email },
            process.env.SECRET_REFRESH_TOKEN,
            { subject: user.id, expiresIn: '30d' }
        )

        await this.refreshTokenRepo.create({ expires_date: '30d', refresh_token, user_id: user.id })
        delete user.password

        return {
            name: user.name,
            email: user.email,
            id: user.id,
            refresh_token
        }
    }
}