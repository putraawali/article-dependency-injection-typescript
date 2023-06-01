import { Sequelize } from "sequelize";
import { ArticleRepositoryInit, ArticleRepository } from "./article_repository";
import { ApiRepository, ApiRepositoryInit } from "./api";
ApiRepositoryInit;
interface BaseRepository {
    Article: Promise<ArticleRepository>;
    Api: Promise<ApiRepository>;
}

async function BaseRepositoryInit(db: Sequelize): Promise<BaseRepository> {
    return {
        Article: ArticleRepositoryInit(db),
        Api: ApiRepositoryInit(),
    };
}

export { BaseRepositoryInit, BaseRepository };
