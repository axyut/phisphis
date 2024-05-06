export function HandleEnvVars() {
    const DB_CONN = process.env.DB_CONN;
    let conn = "";
    if (DB_CONN == "remote") {
        const username = process.env.mongo_USER as string;
        const pass = process.env.mongo_PASS as string;
        const db_name = process.env.mongo_DB_NAME as string;
        if (!username || !pass || !db_name) {
            throw new Error("DB Connection string not provided");
        }
        conn = `mongodb+srv://${username}:${pass}@newcluster.zcb8pse.mongodb.net/${db_name}`;
    } else {
        conn = "mongodb://localhost:27017/phisphis";
    }
    const PORT = process.env.PORT || 3000;
    const JWT_SECRET = process.env.JWT_SECRET;
    if (!JWT_SECRET) {
        throw new Error("JWT Secret not provided");
    }
    return {
        DB_CONN: conn,
        PORT,
        JWT_SECRET,
    };
}
