import "dotenv/config";
import mysql from "mysql2";

const db_host = process.env.DB_HOST;
const db_user = process.env.DB_USER;
const db_password = process.env.DB_PASSWORD;
const db_port = process.env.DB_PORT;
const db_name = process.env.DB_NAME;

//test connection
// Create the connection to database
const connection = mysql.createPool({
    host: db_host,
    user: db_user,
    port: db_port,
    password: db_password,
    database: db_name,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

export default connection;
