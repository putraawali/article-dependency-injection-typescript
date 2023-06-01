import { Express } from "express";
import { BaseService } from "../services/base_service";
import { ArticleControllerInit } from "./article_controller";
function BaseControllerInit(app: Express, service: BaseService) {
    ArticleControllerInit(app, service);
}

export { BaseControllerInit };
