import { Sequelize } from "sequelize";

async function connection(): Promise<Sequelize> {
    const db = new Sequelize({
        dialect: "postgres",
        host: process.env.DB_PG_HOST,
        port: Number(process.env.DB_PG_PORT),
        database: process.env.DB_PG_DB_NAME,
        username: process.env.DB_PG_USER,
        password: process.env.DB_PG_PASS,
    });

    try {
        await db.authenticate();
        console.log("Success connect postgres");
    } catch (error) {
        console.log("Failed connect postgres, error: %s", error);
        process.exit(500);
    }

    return db;
}
export { connection };
