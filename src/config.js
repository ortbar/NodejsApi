// con estas dos lineas estoy leyendo variables de entorno
import {config} from 'dotenv'

config()

// console.log(process.env.PORT)
// console.log(process.env.DB_HOST)
// console.log(process.env.DB_USER)
// console.log(process.env.DB_PASSWORD)
// console.log(process.env.DB_DATABASE)

// no quiero ver por consola los valores de arriba, quiero utilizarlos ...y para ello
// creamos estas constantes en las que lo que estamos queriendo decir es 
// toma los valores de variable de entorno desde .env y almacenalos y si no existen, toma el valor que se indique
export const PORT = process.env.PORT || 3000
export const DB_USER = process.env.DB_USER || 'root';
export const DB_PASSWORD = process.env.DB_PASSWORD || '';
export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_DATABASE = process.env.DB_DATABASE || 'companydb';
export const DB_PORT = process.env.DB_PORT || 3306


