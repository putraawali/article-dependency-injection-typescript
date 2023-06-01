import { DataTypes, Sequelize } from "sequelize";

import { ArticleModel } from "../models/article";

interface ArticleRepository {
    getAll: () => Promise<ArticleModel[]>;
    getById: (article_id: number) => Promise<ArticleModel | null>;
}

async function ArticleRepositoryInit(
    db: Sequelize
): Promise<ArticleRepository> {
    let article = db.define<ArticleModel>(
        "Article",
        {
            article_id: {
                primaryKey: true,
                type: DataTypes.BIGINT,
                autoIncrement: true,
            },
            user_id: {
                type: DataTypes.BIGINT,
                allowNull: false,
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            created_at: {
                type: DataTypes.DATE,
            },
            updated_at: {
                type: DataTypes.DATE,
            },
            deleted_at: {
                type: DataTypes.DATE,
            },
        },
        {
            tableName: "articles",
            createdAt: "created_at",
            updatedAt: "updated_at",
            deletedAt: "deleted_at",
        }
    );

    return {
        getAll: async () => {
            let data = await article.findAll();
            return data;
        },
        getById: async (article_id: number) => {
            let data = await article.findByPk(article_id);
            return data;
        },
        // updateById: async (data: ArticleModel) => {
        //     article.update(data, {where: {article_id: data.article_id}})
        // }
    };
}

export { ArticleRepositoryInit, ArticleRepository, ArticleModel };
