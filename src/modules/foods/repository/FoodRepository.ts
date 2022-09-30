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
    menu_id: string
}

export class FoodRepository implements IFoodRepository {

    private repository: Repository<Food>

    constructor() {
        this.repository = getRepository(Food)
    }

    async create(data: FoodDTO) {
        console.log(data);

        const food = this.repository.create({ ...data, menu: { id: data.menu_id } })
        await this.repository.save(food)
        return food
    }

    async list(menu_id: string) {
        return await this.repository.find({ where: { menu: { id: menu_id } } })
    }
}