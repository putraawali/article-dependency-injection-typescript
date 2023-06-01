import {
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
} from "sequelize";

import { User } from "./user";

interface ArticleModel
    extends Model<
        InferAttributes<ArticleModel>,
        InferCreationAttributes<ArticleModel>
    > {
    article_id: CreationOptional<number>;
    user_id: Number;
    title: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}

interface Article {
    article_id: number;
    user_id: Number;
    title: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}

interface ArticleUser extends Article {
    user: User | null;
}

function ConstructArticleUser(article: ArticleModel, user: User): ArticleUser {
    let response: ArticleUser = {
        article_id: article.article_id,
        user_id: article.user_id,
        title: article.title,
        created_at: article.created_at,
        updated_at: article.updated_at,
        deleted_at: article.deleted_at,
        user: {
            user_id: user.user_id,
            user_name: user.user_name,
        },
    };

    return response;
}

export { ArticleModel, ArticleUser, ConstructArticleUser };
