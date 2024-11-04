import {Router} from 'express'
import {pool} from '../db.js' // importamos en indexRoutes.js para poder realizar la conexion y operaciones con la bd
                            // permitiendo el uso de promesas y del uso de la sintaxis async...await

const router = Router()

router.get('/ping', async (req, res) => { 
    const [result] = await pool.query('SELECT "Pong" AS result')
    res.json(result[0])
})



export default router