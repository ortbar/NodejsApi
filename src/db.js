import { createPool } from "mysql2/promise" // la version mysql2/promise permite utilizar promesas y la sintaxis async...await

export const pool = createPool ({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database:'companydb'
})