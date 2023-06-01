import { ArticleModel } from "../repositories/article_repository";
import { BaseService } from "../services/base_service";
import { Express, Request, Response } from "express";
import { Response as Resp } from "../models/response";

async function ArticleControllerInit(app: Express, service: BaseService) {
    app.get("/", async (req: Request, res: Response) => {
        let articles = await service.Article.getAll();
        res.json({
            message: "Success",
            ...articles,
        });
        return;
    });

    app.get("/:id", async (req: Request, res: Response) => {
        const { id } = req.params;
        let article = await service.Article.getById(+id);

        let response: Resp = {
            message: "",
            code: 0,
            data: undefined,
        };

        if (article.error == null) {
            response.code = 200;
            response.data = article.data;
            response.message = "success";
        } else {
            response.code = 404;
            response.message = "data not found";
        }

        res.json(response).status(response.code);
    });
}

export { ArticleControllerInit };
