import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { connection } from "./db/pg";
import { Server } from "./app";

dotenv.config();

const app: Express = express();
const port = process.env.APP_PORT || 3000;

connection()
    .then((db) => {
        Server({ app, db });

        app.listen(port, () =>
            console.log(
                `⚡️[server]: Server is running at http://localhost:${port}`
            )
        );
    })
    .catch((err) => {
        console.log(err);
        process.exit(500);
    });
