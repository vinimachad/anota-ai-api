import { hashSync } from "bcryptjs";
import { Column, Entity, BeforeInsert, BeforeUpdate, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Address } from "../../Geolocation/entities/Address";
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

    @OneToMany(type => Address, address => address.user, { eager: true })
    adresses: Address[]
    @OneToMany(type => RefreshToken, token => token.user, { eager: true })
    refresh_tokens: RefreshToken[]

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        this.password = hashSync(this.password, 8)
    }
}