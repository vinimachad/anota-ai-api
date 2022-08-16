import { container, inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { IUserRepository } from "../../repositories/UserRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";

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
export class CreateUserViewModel {

    private repository: IUserRepository

    constructor(
        @inject('UserRepository')
        repository: IUserRepository) {
        this.repository = repository
    }

    async userExistsValidation(data: IData) {
        let user = await this.repository.findByEmail(data.email)

        if (user) {
            throw new AppError('Já temos uma pessoa utilizando este email')
        }

        return this.createNewUser(data)
    }

    private async createNewUser(data: IData) {
        let useCase = container.resolve(CreateUserUseCase)
        return await useCase.execute(data)
    }
}