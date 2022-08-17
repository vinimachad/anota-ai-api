import { getRepository, Repository } from "typeorm"
import { Coordinates } from "../entities/Coordinates"

export interface ICoordinateRepository {
    create(data: IData): Promise<Coordinates>
    list(user_id: string): Promise<Coordinates[]>
}

type IData = {
    user_id: string
    name: string
    latitude: string
    longitude: string
}

export class CoordinateRepository implements ICoordinateRepository {

    private repository: Repository<Coordinates>

    constructor() {
        this.repository = getRepository(Coordinates)
    }

    async create({ user_id, name, latitude, longitude }: IData): Promise<Coordinates> {
        const coordinates = this.repository.create({ name, latitude, longitude, user: { id: user_id } })
        await this.repository.save(coordinates)
        return coordinates
    }

    async list(user_id: string): Promise<Coordinates[]> {
        return await this.repository.find({ where: { user: { id: user_id } } })
    }
}