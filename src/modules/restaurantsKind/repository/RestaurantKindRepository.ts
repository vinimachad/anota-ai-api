import { getRepository, Repository } from "typeorm"
import { RestaurantKind } from "../entities/RestaurantKind"

export interface IRestaurantKindRepository {
    create(data: RestaurantKindDTO)
    list()
}

export type RestaurantKindDTO = {
    type: string
}

export class RestaurantKindRepository implements IRestaurantKindRepository {

    private repository: Repository<RestaurantKind>

    constructor() {
        this.repository = getRepository(RestaurantKind)
    }

    async create(data: RestaurantKindDTO) {
        const entitie = this.repository.create(data)
        await this.repository.save(entitie)
        return entitie
    }

    async list() {
        return await this.repository.find()
    }
}