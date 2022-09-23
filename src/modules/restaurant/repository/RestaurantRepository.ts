import { getRepository, MoreThanOrEqual, Repository } from "typeorm"
import { Restaurant } from "../entities/Restaurant"

export interface IRestaurantRepository {
    create(data: RestaurantDTO): Promise<Restaurant>
    list()
    findByMoreEvaluationed()
    findByIds(ids: string[])
    findById(id: string)
    updateEvaluation(restaurant: Restaurant)
}

type RestaurantDTO = {
    name: string
    price: number
    avatar_url: string
    type: string
}

export class RestaurantRepository implements IRestaurantRepository {

    private repository: Repository<Restaurant>

    constructor() {
        this.repository = getRepository(Restaurant)
    }

    async create(data: RestaurantDTO) {
        const restaurant = this.repository.create(data)
        await this.repository.save(restaurant)
        return restaurant
    }

    async updateEvaluation(restaurant: Restaurant) {
        await this.repository.save(restaurant)
        return restaurant
    }

    async list() {
        return await this.repository.find()
    }

    async findByMoreEvaluationed() {
        return await this.repository.find({ evaluation: MoreThanOrEqual(3) })
    }

    async findByIds(ids: String[]) {
        return await this.repository.findByIds(ids)
    }

    async findById(id: string) {
        return await this.repository.findOne(id)
    }
}