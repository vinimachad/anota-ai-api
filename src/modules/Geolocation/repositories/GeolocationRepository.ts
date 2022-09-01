import { getRepository, Repository } from "typeorm"
import { Address } from "../entities/Address"

export interface IGeolocationRepository {
    create(data: IData): Promise<Address>
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
                restaurant: { id: data.restaurant_id }
            }
        )
        await this.repository.save(address)
        return address
    }
}