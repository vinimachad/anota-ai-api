import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Restaurant } from "../../restaurant/entities/Restaurant"
import { User } from "../../users/entities/User"

@Entity('adresses')
export class Address {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    street_number: string
    @Column()
    street: string
    @Column()
    district: string
    @Column()
    city: string
    @Column()
    state: string
    @Column()
    country: string
    @Column()
    postal_code: string
    @Column()
    formatted_address: string
    @Column({ nullable: true })
    lat: string
    @Column({ nullable: true })
    long: string

    @Column({ nullable: true })
    restaurantId: string
    @Column({ nullable: true })
    userId: string

    @CreateDateColumn()
    created_at: Date

    @ManyToOne(() => User, user => user.adresses)
    @JoinColumn({ name: "userId" })
    user?: User
    @ManyToOne(() => Restaurant, entity => entity.adresses)
    @JoinColumn({ name: "restaurantId" })
    restaurant?: Restaurant
}