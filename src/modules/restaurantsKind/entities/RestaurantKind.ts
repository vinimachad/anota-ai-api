import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('restaurant_kind')
export class RestaurantKind {

    @PrimaryGeneratedColumn('uuid')
    id: string
    @Column()
    type: string
}