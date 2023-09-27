import "reflect-metadata"
import { DataSource } from "typeorm"
import { CreateFirstTable1695260803478 } from './migrations/1695260803478-CreateFirstTable'
import { CreateAccountTable1695488210295 } from "./migrations/1695488210295-CreateAccountTable"
import { ChangeCollumNameFromTableAccount1695594933410 } from "./migrations/1695594933410-ChangeCollumNameFromTableAccount"
import { User } from "../app/entities/UserEntitie"
import { Account } from "../app/entities/AccountEntitie"


export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "./src/database/database.sqlite",
    synchronize: true,
    logging: false,
    entities: [User,Account],
    migrations: [CreateFirstTable1695260803478,CreateAccountTable1695488210295,ChangeCollumNameFromTableAccount1695594933410],
    subscribers: [],
})
