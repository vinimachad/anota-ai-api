import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Restaurant } from "../../restaurant/entities/Restaurant";

@Entity('foods')
export class Food {

    @PrimaryGeneratedColumn('uuid')
    id: string
    @Column()
    name: string
    type: string
    price: number
    preview_url: string
    description: string

    @ManyToOne(type => Restaurant, entity => entity.foods)
    restaurant: Restaurant
}