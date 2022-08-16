import { getRepository, Repository } from "typeorm"
import { User } from "../entities/User"

export interface IUserRepository {
    create(data: UserDTO): Promise<User>
    findByEmail(email: string): Promise<User>
    findById(id: string): Promise<User>
    list(): Promise<User[]>
}

type UserDTO = {
    name: string
    last_name: string
    password: string
    email: string
}

export class UserRepository implements IUserRepository {

    private repository: Repository<User>

    constructor() {
        this.repository = getRepository(User)
    }

    async create(data: UserDTO): Promise<User> {
        const user = this.repository.create(data)
        await this.repository.save(user)
        return user
    }

    async findByEmail(email: string): Promise<User> {
        return await this.repository.findOne({ email })
    }

    async findById(id: string): Promise<User> {
        return await this.repository.findOne({ id })
    }

    async list(): Promise<User[]> {
        return await this.repository.find()
    }
}