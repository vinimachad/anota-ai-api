import { inject, injectable } from "tsyringe";
import { IRefreshTokenRepository } from "../../repositories/RefreshTokenRepository";
import jwt from 'jsonwebtoken'
import { AppError } from "../../../../errors/AppError";

@injectable()
export class RefreshTokenUseCase {

    private repository: IRefreshTokenRepository

    constructor(
        @inject('RefreshTokenRepository')
        repository: IRefreshTokenRepository) {
        this.repository = repository
    }

    async execute(token: string): Promise<string> {
        const { email, sub } = jwt.verify(token, process.env.SECRET_REFRESH_TOKEN) as { sub: string, email: string }
        const userId = sub

        let userToken = await this.repository.findByUserIdAndRefreshToken(userId, token)

        if (!userToken) {
            throw new AppError('Esse token não existe!')
        }

        await this.repository.deleteById(userToken.id)
        const refresh_token = jwt.sign({ email }, process.env.SECRET_REFRESH_TOKEN, {
            subject: userId, expiresIn: '30d'
        })

        await this.repository.create({
            refresh_token,
            expires_date: '30d',
            user_id: userId
        })

        return refresh_token
    }
}