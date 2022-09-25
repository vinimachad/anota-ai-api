import { inject, injectable } from "tsyringe";
import { Address } from "../../../entities/Address";
import { IGeolocationRepository } from "../../../repositories/GeolocationRepository";

@injectable()
export class UseCase {

    private repository: IGeolocationRepository

    constructor(
        @inject('GeolocationRepository')
        repository: IGeolocationRepository) {
        this.repository = repository
    }

    async execute(userId: string): Promise<Address[]> {
        return await this.repository.findByUserId(userId)
    }
}