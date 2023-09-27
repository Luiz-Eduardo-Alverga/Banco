import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity("users")
class User {

    @PrimaryGeneratedColumn()
    readonly id: number

    @Column('varchar')
    name: string

    @Column('varchar')
    cpf: string

    @Column('varchar')
    conta: string

}

export { User }
