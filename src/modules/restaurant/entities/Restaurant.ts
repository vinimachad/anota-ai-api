import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Avaliation } from "../../avaliations/entities/Avaliation"
import { Food } from "../../foods/entities/Food"
import { Address } from "../../Geolocation/entities/Address"

@Entity('restaurant')
export class Restaurant {

    @PrimaryGeneratedColumn('uuid')
    id: string
    @Column()
    name: string
    @Column()
    avatar_url?: string
    @Column()
    type: string
    @Column()
    price: number

    @OneToMany(type => Avaliation, avaliation => avaliation.restaurant, { eager: true })
    avaliations?: Avaliation[]
    @OneToMany(type => Address, address => address.restaurant, { eager: true })
    adresses?: Address[]
    @OneToMany(type => Food, entity => entity.restaurant, { eager: true })
    foods?: Food[]

    @CreateDateColumn()
    created_at: Date
}