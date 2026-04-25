import mysql from 'mysql2/promise';

export const db = async () => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'todo_app'
    })
    return connection;
}