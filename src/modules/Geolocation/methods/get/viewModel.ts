import { container, injectable } from "tsyringe";
import { geolocationApi } from "../../../../services/GeolocationAPI";
import { Address } from "../../entities/Address";
import { AddressComponents } from "../../model/AddressComponents";

type IGeoResponse = {
    address_components: AddressComponents[],
    formatted_address: string
}

@injectable()
export class ViewModel {

    geolocation: IGeoResponse
    address = new Address()

    async getGeolocation(lat: string, long: string) {
        let res = await geolocationApi.get("", {
            params: { latlng: `${lat},${long}`, key: process.env.GEOLOCATION_KEY }
        })
        this.geolocation = res.data.results[0]
        return this.setAddressComponentsToCorrectTypes()
    }

    private setAddressComponentsToCorrectTypes() {
        this.geolocation.address_components.forEach(item => {
            if (item.types[0] === "street_number") {
                this.address.street_number = item.short_name
            }
            if (item.types[0] === 'route') {
                this.address.street = item.short_name
            }
            if (item.types[0] === 'political') {
                this.address.district = item.short_name
            }
            if (item.types[0] === 'administrative_area_level_2') {
                this.address.city = item.short_name
            }
            if (item.types[0] === 'administrative_area_level_1') {
                this.address.state = item.short_name
            }
            if (item.types[0] === 'country') {
                this.address.country = item.short_name
            }
            if (item.types[0] === 'postal_code') {
                this.address.postal_code = item.short_name
            }

        })
        this.address.formatted_address = this.geolocation.formatted_address
        return this.address
    }
}