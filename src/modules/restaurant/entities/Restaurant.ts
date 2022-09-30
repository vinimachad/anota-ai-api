import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { DecimalTransformer } from "../../../helpers/DecimalTransformer"
import { Avaliation } from "../../avaliations/entities/Avaliation"
import { Address } from "../../Geolocation/entities/Address"
import { Menu } from "../../menu/entities/Menu"

export type Detail = {
    title: string
    value: string
    restaurant_id: string
}

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
    @Column({ type: 'decimal', precision: 5, scale: 2, default: 0, transformer: new DecimalTransformer() })
    evaluation: number
    @Column({ default: '' })
    description: string

    @Column("jsonb", { default: [], onUpdate: 'CASCADE' })
    details: Detail[]

    @OneToMany(type => Avaliation, avaliation => avaliation.restaurant)
    avaliations?: Avaliation[]

    @OneToMany(type => Address, address => address.restaurant)
    adresses?: Address[]

    @OneToOne(() => Menu, entity => entity.restaurant)
    @JoinColumn()
    menu: Menu

    @CreateDateColumn()
    created_at: Date
}