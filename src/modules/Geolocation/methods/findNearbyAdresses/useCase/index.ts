import { inject, injectable } from "tsyringe";
import { IGeolocationRepository } from "../../../repositories/GeolocationRepository";

@injectable()
export class UseCase {

    private repository: IGeolocationRepository

    constructor(
        @inject('GeolocationRepository')
        repository: IGeolocationRepository) {
        this.repository = repository
    }

    async execute() {
        return await this.repository.findNearbyAdresses()
    }
}