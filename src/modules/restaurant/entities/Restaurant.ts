import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Avaliation } from "../../avaliations/entities/Avaliation"
import { Address } from "../../Geolocation/entities/Address"

@Entity('restaurant')
export class Restaurant {

    @PrimaryGeneratedColumn('uuid')
    id: string
    @Column()
    name: string

    @OneToMany(type => Avaliation, avaliation => avaliation.restaurant, { eager: true })
    avaliations: Avaliation[]

    @OneToMany(type => Address, address => address.address, { eager: true })
    adresses: Address[]
}