import { getRepository, Repository } from "typeorm"
import { Address } from "../entities/Address"

export interface IGeolocationRepository {
    create(data: IData): Promise<Address>
}

type IData = {
    coordinate_id: string
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
        console.log("address->", data)
        const address = this.repository.create({ ...data, coordinate: { id: data.coordinate_id } })
        console.log("address->2", address)
        await this.repository.save(address)
        console.log("address->3")
        return address
    }
}