import dotenv from 'dotenv';
dotenv.config();

import mysql from 'mysql2';

// CREATE CONNECTION WITH DATABASE
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: process.env.password,
    database: "todo_db"
});

export default db;
