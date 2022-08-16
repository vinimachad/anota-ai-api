import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../repositories/UserRepository";
import jwt from 'jsonwebtoken'
import { IRefreshTokenRepository } from "../../repositories/RefreshTokenRepository";
import { ICoordinateRepository } from "../../../Coordinates/repository/CoordinatesRepository";

type IData = {
    name: string
    last_name: string
    password: string
    email: string
    latitude: string
    longitude: string
    coordinate_name: string
}

@injectable()
export class CreateUserUseCase {

    private repository: IUserRepository
    private coordinateRepository: ICoordinateRepository
    private refreshTokenRepo: IRefreshTokenRepository

    constructor(
        @inject('UserRepository') repository: IUserRepository,
        @inject('RefreshTokenRepository') refreshTokenRepo: IRefreshTokenRepository,
        @inject('CoordinateRepository') coordinateRepository: ICoordinateRepository
    ) {
        this.repository = repository
        this.refreshTokenRepo = refreshTokenRepo
        this.coordinateRepository = coordinateRepository
    }

    async execute(data: IData) {

        let user = await this.repository.create(data)
        let coordinate = await this.coordinateRepository.create({
            latitude: data.latitude,
            longitude: data.longitude,
            user_id: user.id,
            name: data.coordinate_name
        })

        let token = jwt.sign({}, process.env.SECRET_TOKEN, { subject: user.id, expiresIn: '15m' })
        let refresh_token = jwt.sign(
            { email: user.email },
            process.env.SECRET_REFRESH_TOKEN,
            { subject: user.id, expiresIn: '30d' }
        )

        await this.refreshTokenRepo.create({ expires_date: '30d', refresh_token, user_id: user.id })
        delete user.password

        return { user, token, refresh_token, coordinate }
    }
}