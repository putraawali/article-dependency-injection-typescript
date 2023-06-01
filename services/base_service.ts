import { BaseRepository } from "../repositories/base_repository";
import { ArticleService, ArticleServiceInit } from "./article_service";

interface BaseService {
    Article: ArticleService;
}

async function BaseServiceInit(repo: BaseRepository): Promise<BaseService> {
    return {
        Article: ArticleServiceInit(repo),
    };
}

export { BaseService, BaseServiceInit };
