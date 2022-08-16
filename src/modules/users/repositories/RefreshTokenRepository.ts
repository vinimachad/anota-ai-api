import { getRepository, Repository } from "typeorm"
import { RefreshToken } from "../entities/RefreshToken"

type IRefreshTokenDTO = {
    expires_date: string
    refresh_token: string
    user_id: string
}

export interface IRefreshTokenRepository {
    create(data: IRefreshTokenDTO): Promise<RefreshToken>
    findByUserIdAndRefreshToken(id: string, token: string): Promise<RefreshToken>
    deleteById(id: string): Promise<void>
}

export class RefreshTokenRepository implements IRefreshTokenRepository {

    private repository: Repository<RefreshToken>

    constructor() {
        this.repository = getRepository(RefreshToken)
    }

    async create({ expires_date, refresh_token, user_id }: IRefreshTokenDTO): Promise<RefreshToken> {
        const refreshToken = this.repository.create({ expires_date, refresh_token, user: { id: user_id } })
        await this.repository.save(refreshToken)
        return refreshToken
    }

    async findByUserIdAndRefreshToken(id: string, token: string): Promise<RefreshToken> {
        return await this.repository.findOne({
            user: { id },
            refresh_token: token
        })
    }

    async deleteById(id: string): Promise<void> {
        await this.repository.delete(id)
    }
}