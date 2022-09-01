import { getRepository, Repository } from "typeorm"
import { Restaurant } from "../entities/Restaurant"

export interface IRestaurantRepository {
    create(data: RestaurantDTO): Promise<Restaurant>
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
}