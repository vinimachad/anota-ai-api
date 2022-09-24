import { BeforeInsert, BeforeUpdate, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { DecimalTransformer } from "../../../helpers/DecimalTransformer"
import { Avaliation } from "../../avaliations/entities/Avaliation"
import { Food } from "../../foods/entities/Food"
import { Address } from "../../Geolocation/entities/Address"

@Entity('restaurant')
export class Restaurant {

    @PrimaryGeneratedColumn('uuid')
    id: string
    @Column()
    name: string
    @Column()
    avatar_url?: string
    @Column()
    type: string
    @Column()
    price: number
    @Column({ type: 'decimal', precision: 5, scale: 2, default: 0, transformer: new DecimalTransformer() })
    evaluation: number

    @OneToMany(type => Avaliation, avaliation => avaliation.restaurant, { eager: true })
    avaliations?: Avaliation[]
    @OneToMany(type => Address, address => address.restaurant)
    adresses?: Address[]
    @OneToMany(type => Food, entity => entity.restaurant)
    foods?: Food[]

    @CreateDateColumn()
    created_at: Date

    updateEvaluation() {
        let points = this.avaliations.map(evaluations => {
            return evaluations.points
        })

        var sumValue = 0
        points.forEach(point => {
            sumValue += point
        })

        this.evaluation = sumValue / points.length
    }
}