import {pool} from '../db.js'

export const getEmployees = async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM employee') // cualquier tipo de operacion con la bd, siempre será una consulta / funcion asincrona
    
    res.json(rows);
};

export const getEmployee = async (req, res) => {
const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [req.params.id])
// si no encunetra ningun id con el paramentro pasado devuelve un error
if (rows.length <= 0)  return res.status(404).json({
        message: 'employee not found'
    })

res.json(rows[0])
} 



export const createEmployee = async (req, res) => {
    const {name, salary} = req.body;
    const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUES (?, ?)', [name, salary]) // cualquier tipo de operacion con la bd, siempre será una consulta / funcion asincrona
    res.send({ 
        id: rows.insertId,
        name,
        salary
     })
}

export const deleteEmployee = async (req, res) => {
    const [result] = await pool.query('DELETE FROM employee WHERE id = ?', [req.params.id])
    if (result.affectedRows <=0) return res.status(404).json({
        message: 'employee not found'
    })
    //si la consulta es correcta, es decir si se elimina el registro, sólo mandamos el estado 204 para que el cliente lo sepa(se puede eliminar, pero no se devuelve nada)
    res.sendStatus(204)
}

export const updateEmployee = async (req, res) => {
    // const id = req.params.id
    const {id} = req.params
    const {name, salary} = req.body
    //                                                             ifnull, si se le pasa un valor lo toma, si no, no lo toma si no que lo deja con el valor quie tenía.
    const [result] = await pool.query('UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?', [name, salary, id])
    console.log(result)

    if (result.affectedRows === 0) return res.sendStatus(404).json({
        messsage: 'employee not found'
    })
    const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?' , [id])

    res.json(rows[0])

}

