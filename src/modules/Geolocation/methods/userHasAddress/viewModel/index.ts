import { container, injectable } from "tsyringe"
import { Address } from "../../../entities/Address"
import { UseCase } from "../useCase"

@injectable()
export class ViewModel {

    useCase = container.resolve(UseCase)

    async userHasAddress(userId: string) {
        let addresses = await this.useCase.execute(userId)
        return {
            is_empty: this.isEmpty(addresses),
            addresses
        }
    }

    private isEmpty(adresses: Address[]) {
        if (adresses.length == 0) {
            return true
        }
        return false
    }
}