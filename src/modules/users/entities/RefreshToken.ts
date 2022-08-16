import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity('users_tokens')
export class RefreshToken {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @ManyToOne(() => User, user => user.refresh_tokens)
    user: User

    @Column()
    refresh_token: string

    @Column()
    expires_date: string

    @CreateDateColumn()
    created_at: Date
}