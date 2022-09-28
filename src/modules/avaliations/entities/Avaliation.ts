import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Restaurant } from "../../restaurant/entities/Restaurant"
import { User } from "../../users/entities/User"

@Entity('avaliation')
export class Avaliation {

    @PrimaryGeneratedColumn('uuid')
    id: string
    @Column({ nullable: true })
    points: number
    @Column({ nullable: true })
    description: string
    @Column({ nullable: true })
    title: string

    @ManyToOne(t => User, user => user.avaliations)
    client: User
    @ManyToOne(t => Restaurant, entity => entity.avaliations)
    restaurant: Restaurant
}