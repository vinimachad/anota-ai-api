import { inject, injectable } from "tsyringe";
import { IMenuRepository } from "../../repositories/MenuRepository";

@injectable()
export class CreateMenuUseCase {

    private repository: IMenuRepository

    constructor(
        @inject('MenuRepository')
        repository: IMenuRepository) {
        this.repository = repository
    }

    async execute(restaurant_id: string) {
        return await this.repository.create(restaurant_id)
    }
}