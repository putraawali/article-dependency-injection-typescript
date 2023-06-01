import { BaseRepository } from "../repositories/base_repository";
import { ArticleModel } from "../repositories/article_repository";
import { ConstructArticleUser } from "../models/article";

interface ArticleService {
    getAll: () => Promise<ArticleModel[]>;
    getById: (article_id: number) => Promise<ServiceResponse>;
}

interface ServiceResponse {
    error: Error | null;
    data: any;
}

function ArticleServiceInit(repo: BaseRepository): ArticleService {
    return {
        getAll: async () => {
            let articles = await (await repo.Article).getAll();
            return articles;
        },
        getById: async (article_id: number) => {
            let result: ServiceResponse = {
                error: null,
                data: undefined,
            };

            const article = await (await repo.Article).getById(article_id);

            if (!article) {
                result.error = new Error("Data not found");
            } else {
                const user = await (
                    await repo.Api
                ).getUserById(Number(article.user_id));
                result.data = ConstructArticleUser(article, user.data);
            }

            return result;
        },
    };
}

export { ArticleServiceInit, ArticleService };
