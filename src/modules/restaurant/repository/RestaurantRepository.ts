import { getRepository, MoreThanOrEqual, Repository } from "typeorm"
import { Detail, Restaurant } from "../entities/Restaurant"

export interface IRestaurantRepository {
    create(data: RestaurantDTO): Promise<Restaurant>
    list()
    findByMoreEvaluationed()
    findByIds(ids: string[])
    findById(id: string, relations?: string[])
    updateEvaluation(restaurant_id: string, evaluation: number)
    updateDetails(data: DetailDTO)
    listDetailsByRestaurantId(id: string)
}

type RestaurantDTO = {
    name: string
    price: number
    avatar_url: string
    type: string
}

export type DetailDTO = {
    restaurant_id: string
    results: Detail[]
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

    async updateEvaluation(restaurant_id: string, evaluation: number) {
        return await this.repository
            .createQueryBuilder()
            .update(Restaurant)
            .set({ evaluation: evaluation })
            .where("id = :id", { id: restaurant_id })
            .execute()
    }

    async list() {
        return await this.repository.find()
    }

    async findByMoreEvaluationed() {
        return await this.repository.find({ evaluation: MoreThanOrEqual(3) })
    }

    async findByIds(ids: String[]) {
        return await this.repository.findByIds(ids, { relations: ['avaliations'] })
    }

    async findById(id: string, relations?: string[]) {
        return await this.repository.findOne(id, {
            relations
        })
    }

    async updateDetails(data: DetailDTO) {
        await this.repository
            .createQueryBuilder()
            .update(Restaurant)
            .set({ details: data.results })
            .where("id = :id", { id: data.restaurant_id })
            .execute()
    }

    async listDetailsByRestaurantId(id: string) {
        return await this.repository.findOne(id, {
            select: ['details']
        })
    }
}