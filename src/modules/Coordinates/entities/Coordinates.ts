import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Address } from "../../Geolocation/entities/Address";
import { User } from "../../users/entities/User";

@Entity('coordinates')
export class Coordinates {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @ManyToOne(() => User, user => user.coordinates)
    user: User

    @OneToOne(() => Address, address => address.coordinate, { eager: true })
    address: Address

    @Column()
    name: string
    @Column()
    latitude: string
    @Column()
    longitude: string

    @CreateDateColumn()
    created_at: Date
}