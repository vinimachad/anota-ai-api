module.exports = {
    type: "postgres",
    port: 5432,
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    migrations: [
        process.env.MIGRATION_PATH
    ],
    entities: [process.env.ENTITIES_PATH],
    cli: {
        migrationsDir: "./src/database/migrations"
    },
    ssl: process.env.DB_HAS_SSL,
    extra: {
        ssl: {
            rejectUnauthorized: false
        }
    }
}