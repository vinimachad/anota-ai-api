import { getRepository, Repository } from "typeorm"
import { Avaliation } from "../entities/Avaliation"

interface IAvaliationRepository {

}

type AvaliationDTO = {

}

export class AvaliationRepository implements IAvaliationRepository {

    private repository: Repository<Avaliation>

    constructor() {
        this.repository = getRepository(Avaliation)
    }

    async create(data: AvaliationDTO): Promise<Avaliation> {
        const avaliation = this.repository.create({})
        await this.repository.save(avaliation)
        return avaliation
    }
}