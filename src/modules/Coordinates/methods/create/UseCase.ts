import { container, inject, injectable } from "tsyringe";
import { AppError } from "../../../../errors/AppError";
import { ViewModel } from "../../../Geolocation/methods/get/viewModel";
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

        let coordinate = await this.repository.create(data)
        let addresViewModel = container.resolve(ViewModel)
        await addresViewModel.getGeolocation(data.latitude, data.longitude, coordinate.id)

        return coordinate
    }
}