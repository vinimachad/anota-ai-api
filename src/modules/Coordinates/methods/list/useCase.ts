import { inject, injectable } from "tsyringe";
import { ICoordinateRepository } from "../../repository/CoordinatesRepository";

@injectable()
export class UseCase {

    private repository: ICoordinateRepository

    constructor(
        @inject('CoordinateRepository')
        repository: ICoordinateRepository) {
        this.repository = repository
    }

    async execute(user_id: string) {
        return await this.repository.list(user_id)
    }
}