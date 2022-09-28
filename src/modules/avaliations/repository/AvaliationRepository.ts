import { getRepository, Repository } from "typeorm"
import { Avaliation } from "../entities/Avaliation"

export interface IAvaliationRepository {
    create(data: AvaliationDTO)
    findByRestaurantId(id: string)
}

export type AvaliationDTO = {
    user_id: string
    restaurant_id: string
    description?: string
    points: number
}

export class AvaliationRepository implements IAvaliationRepository {

    private repository: Repository<Avaliation>

    constructor() {
        this.repository = getRepository(Avaliation)
    }

    async create(data: AvaliationDTO) {
        const avaliation = this.repository.create(
            {
                ...data,
                restaurant: { id: data.restaurant_id },
                client: { id: data.user_id }
            }
        )
        await this.repository.save(avaliation)
        return avaliation
    }

    async findByRestaurantId(id: string) {
        return await this.repository.find(
            {
                relations: ['client'],
                where: { restaurant: { id } }
            }
        )
    }
}