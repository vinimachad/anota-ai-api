import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Menu } from "../../menu/entities/Menu";

@Entity('foods')
export class Food {

    @PrimaryGeneratedColumn('uuid')
    id: string
    @Column()
    name: string
    @Column()
    type: string
    @Column({ type: 'decimal', precision: 5, scale: 2, default: 0 })
    price: number
    @Column()
    preview_url: string
    @Column()
    description: string

    @ManyToOne(type => Menu, entity => entity.foods)
    menu: Menu
}