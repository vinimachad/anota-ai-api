import { compareSync } from "bcryptjs";
import { container, inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/UserRepository";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

@injectable()
export class AuthenticateUserViewModel {

    private repository: IUserRepository

    constructor(
        @inject('UserRepository')
        repository: IUserRepository) {
        this.repository = repository
    }

    async validateCredentials(email: string, password: string) {
        let user = await this.repository.findByEmail(email)

        if (!user) {
            throw new AppError('Email ou senha incorretos!', 401)
        }

        let hashPasswordIsEqual = compareSync(password, user.password)

        if (user.email != email || !hashPasswordIsEqual) {
            throw new AppError('Email ou senha incorretos!', 401)
        }
        return await this.getUserInfos(user)
    }

    private async getUserInfos(user: User) {
        let useCase = container.resolve(AuthenticateUserUseCase)
        return await useCase.execute(user)
    }
}