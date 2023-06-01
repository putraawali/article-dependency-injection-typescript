import { Express } from "express";
import { Sequelize } from "sequelize";
import { BaseRepositoryInit } from "./repositories/base_repository";
import { BaseServiceInit } from "./services/base_service";
import { BaseControllerInit } from "./controllers/base_controller";

async function Server({ app, db }: { app: Express; db: Sequelize }) {
    let repoitory = await BaseRepositoryInit(db);
    let service = await BaseServiceInit(repoitory);
    BaseControllerInit(app, service);
}

export { Server };
