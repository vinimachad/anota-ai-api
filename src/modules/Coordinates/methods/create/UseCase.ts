import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { ICoordinateRepository } from "../../repository/CoordinatesRepository";

type IData = {
    user_id: string
    name: string
    latitude: string
    longitude: string
}

@injectable()
export class UseCase {

    private repository: ICoordinateRepository

    constructor(
        @inject('CoordinateRepository')
        repository: ICoordinateRepository) {
        this.repository = repository
    }

    async execute(data: IData) {

        if (data.latitude == '' && data.longitude == '' && data.name == '') {
            throw new AppError("É obrigatorio todos os dados da localização")
        }

        return await this.repository.create(data)
    }
}