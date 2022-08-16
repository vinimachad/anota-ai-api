import { inject, injectable } from "tsyringe";
import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/UserRepository";

@injectable()
export default class UseCase {

    private repository: IUserRepository

    constructor(
        @inject('UserRepository')
        repository: IUserRepository) {
        this.repository = repository
    }

    async execute(): Promise<User[]> {
        return await this.repository.list()
    }
}