import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Restaurant } from "../../restaurant/entities/Restaurant";

@Entity('foods')
export class Food {

    @PrimaryGeneratedColumn('uuid')
    id: string
    @Column()
    name: string
    @Column()
    type: string
    @Column()
    price: number
    @Column()
    preview_url: string
    @Column()
    description: string

    @ManyToOne(type => Restaurant, entity => entity.foods)
    restaurant: Restaurant
}