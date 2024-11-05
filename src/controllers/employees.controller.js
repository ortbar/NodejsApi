import {pool} from '../db.js'

export const getEmployees = (req, res) => res.send('obteniendo empleados');

export const createEmployee = async (req, res) => {
    const {name, salary} = req.body;
    const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUES (?, ?)', [name, salary]) // cualquier tipo de operacion con la bd, siempre será una consulta / funcion asincrona
    res.send({ 
        id: rows.insertId,
        name,
        salary
     })
}

export const updateEmployee = (req, res) => res.send('actualizando empleados');

export const deleteEmployee = (req, res) => res.send('eliminando empleados');