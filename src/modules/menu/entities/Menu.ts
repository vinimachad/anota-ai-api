import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Food } from "../../foods/entities/Food";
import { Restaurant } from "../../restaurant/entities/Restaurant";

@Entity('menus')
export class Menu {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @OneToOne(() => Restaurant, entity => entity.menu)
    @JoinColumn()
    restaurant: Restaurant

    @OneToMany(() => Food, entity => entity.menu, { onDelete: 'CASCADE' })
    foods: Food[]
}