import { hashSync } from "bcryptjs";
import { Column, Entity, BeforeInsert, BeforeUpdate, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Coordinates } from "../../Coordinates/entities/Coordinates";
import { RefreshToken } from "./RefreshToken";

@Entity('users')
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string
    @Column()
    name: string
    @Column()
    last_name: string
    @Column()
    password: string
    @Column()
    email: string

    @OneToMany(type => Coordinates, coordinates => coordinates.user, { eager: true })
    coordinates: Coordinates[]
    @OneToMany(type => RefreshToken, token => token.user, { eager: true })
    refresh_tokens: RefreshToken[]

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        this.password = hashSync(this.password, 8)
    }
}