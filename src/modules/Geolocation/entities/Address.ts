import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "../../users/entities/User"

@Entity('adresses')
export class Address {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @ManyToOne(() => User, user => user.adresses)
    user: User

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

    @CreateDateColumn()
    created_at: Date
}