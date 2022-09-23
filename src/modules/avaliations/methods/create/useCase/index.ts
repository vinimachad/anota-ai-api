import { inject, injectable } from "tsyringe";
import { AvaliationDTO, IAvaliationRepository } from "../../../repository/AvaliationRepository";

@injectable()
export class UseCase {

    private repository: IAvaliationRepository

    constructor(
        @inject('AvaliationRepository')
        repository: IAvaliationRepository) {
        this.repository = repository
    }

    async execute(req: AvaliationDTO) {
        return await this.repository.create(req)
    }
}