import { getRepository, Repository } from "typeorm"
import { Menu } from "../entities/Menu"

export interface IMenuRepository {
    create(restaurant_id: string)
    listFoodsByRestaurantId(restaurant_id: string)
}

export class MenuRepository implements IMenuRepository {

    private repository: Repository<Menu>

    constructor() {
        this.repository = getRepository(Menu)
    }

    async create(restaurant_id: string) {
        const entitie = this.repository.create({
            restaurant: { id: restaurant_id }
        })
        await this.repository.save(entitie)
        return entitie
    }

    async listFoodsByRestaurantId(restaurant_id: string) {
        return await this.repository.find({
            relations: ['foods'],
            where: { restaurant: { id: restaurant_id } }
        })
    }
}