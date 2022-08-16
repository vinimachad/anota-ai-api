import { NextFunction, Request, Response } from "express"
import { AppError } from '../errors/AppError'
import jwt from 'jsonwebtoken'
import { RefreshTokenRepository } from "../modules/users/repositories/RefreshTokenRepository"

export async function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
    const headerToken = req.headers.authorization
    const refreshTokenRepository = new RefreshTokenRepository()

    if (!headerToken) {
        throw new AppError("Faltando autenticação no cabeçalho", 401)
    }

    const token = headerToken.replace('Bearer', '').trim()

    try {
        const { sub } = jwt.verify(token, process.env.SECRET_REFRESH_TOKEN) as { sub: string }

        let user = refreshTokenRepository.findByUserIdAndRefreshToken(sub, token)

        if (!user) {
            throw new AppError('Token invalido', 401)
        }

        next()
    } catch {
        throw new AppError('Token invalido', 401)
    }
}