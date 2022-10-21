import { getRepository, Repository } from "typeorm"
import { Address } from "../entities/Address"

export interface IGeolocationRepository {
    create(data: IData): Promise<Address>
    listAddresses()
    findByUserId(userId: string)
    findByRestaurantId(restaurantId: string)
}

type IData = {
    user_id?: string
    restaurant_id?: string
    street_number: string
    street: string
    district: string
    city: string
    state: string
    country: string
    postal_code: string
    formatted_address: string
    coordinate: { lat: string, long: string }
}

export class GeolocationRepository implements IGeolocationRepository {

    private repository: Repository<Address>

    constructor() { 
        this.repository = getRepository(Address)
    }

    async create(data: IData): Promise<Address> {
        const address = this.repository.create(
            {
                ...data,
                user: { id: data.user_id },
                restaurant: { id: data.restaurant_id },
                lat: data.coordinate.lat,
                long: data.coordinate.long
            }
        )
        await this.repository.save(address)
        return address
    }

    async listAddresses() {
        return await this.repository.find()
    }

    async findByUserId(userId: string) {
        return await this.repository.find({ where: { userId } })
    }

    async findByRestaurantId(restaurantId: string) {
        return await this.repository.find({ where: { restaurantId } })
    }
}