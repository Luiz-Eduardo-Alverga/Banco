import { Entity,Column,PrimaryGeneratedColumn, JoinColumn, ManyToOne } from "typeorm";
import { User } from "./UserEntitie";

@Entity("account")
class Account {

  @PrimaryGeneratedColumn()
  id: number

  @Column()
  user_id: Number

  @JoinColumn({name:'user_id'})
  @ManyToOne(() => User)
  userId: User

  @Column()
  saldo : number
}

export { Account }
