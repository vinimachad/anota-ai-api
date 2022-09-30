import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Food } from "../../foods/entities/Food";
import { Restaurant } from "../../restaurant/entities/Restaurant";

@Entity('menus')
export class Menu {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @OneToOne(() => Restaurant, entity => entity.menu)
    restaurant: Restaurant

    @OneToMany(() => Food, entity => entity.menu, { onDelete: 'CASCADE' })
    foods: Food[]
}