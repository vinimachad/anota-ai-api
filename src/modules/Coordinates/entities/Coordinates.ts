import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../users/entities/User";

@Entity('coordinates')
export class Coordinates {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @ManyToOne(() => User, user => user.coordinates)
    user: User

    @Column()
    name: string
    @Column()
    latitude: string
    @Column()
    longitude: string

    @CreateDateColumn()
    created_at: Date
}