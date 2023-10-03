
import { ResourceModel } from "src/app/modules/shared/models/generic-model"

export interface Address {
    city: string
    country: string
    postal_code: number
}
export interface City {
    name: string
    postal_code:number[]

}
export interface Country {
    name: string
    city:City[]
}
export class Address extends ResourceModel<Address> implements Address {
    constructor(address?: Partial<Address>) {
        super(address)
    }
}
export class City extends ResourceModel<City> implements City {
    constructor(city?: Partial<City>) {
        super(city)
    }
}
export class Country extends ResourceModel<Country> implements Country {
    constructor(country?: Partial<Country>) {
        super(country)
    }
}
