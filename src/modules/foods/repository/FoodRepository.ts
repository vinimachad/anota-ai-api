import { getRepository, Repository } from "typeorm"
import { Food } from "../entities/Food"


export interface IFoodRepository {
    create(data: FoodDTO)
    list(restaurant_id: string)
}

export type FoodDTO = {
    name: string
    type: string
    price: number
    preview_url: string
    description: string
    restaurant_id: string
}

export class FoodRepository implements IFoodRepository {

    private repository: Repository<Food>

    constructor() {
        this.repository = getRepository(Food)
    }

    async create(data: FoodDTO) {
        const food = this.repository.create({ ...data, restaurant: { id: data.restaurant_id } })
        await this.repository.save(food)
        return food
    }

    async list(restaurant_id: string) {
        return await this.repository.find({ where: { restaurant: { id: restaurant_id } } })
    }
}