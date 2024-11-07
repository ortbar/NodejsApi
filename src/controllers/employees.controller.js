import {pool} from '../db.js'


//                      ----------------↓↓↓ CONTROLADORES QUE OPERAN CON LA BD ↓↓↓-----------------------

export const getEmployees = async (req, res) => {
    // dentro de try el código correcto. Dentro de catch ponemos lo que queremos que se responda al cliente si hay un error
    try {
        // throw new Error('DB Error')
        const [rows] = await pool.query('SELECT * FROM employee') // cualquier tipo de operacion con la bd, siempre será una consulta / funcion asincrona
    
        res.json(rows)
        
    } catch (error) {
        return res.status(500).json({
            message: 'Something goes wrong'

        })    
    };
};

export const getEmployee = async (req, res) => {
    try {
        // throw new Error('Error inesperado') ---> para hacer la prueba, catch funciona
        const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [req.params.id])
// si no encunetra ningun id con el paramentro pasado devuelve un error
        if (rows.length <= 0)  return res.status(404).json({
        message: 'employee not found'
        })

    res.json(rows[0])
        
    } catch (error) {
        return res.status(500).json({
        message: 'Something goes wrong'
        })   
    }
} 



export const createEmployee = async (req, res) => {
    // el req.body no entra dentro del trycatch, solo se verifican los errores en la consulta a bd.
    const {name, salary} = req.body;
    try {
        const [rows] = await pool.query('INSERT INTO employee (name, salary) VALUES (?, ?)', [name, salary]) // cualquier tipo de operacion con la bd, siempre será una consulta / funcion asincrona
        res.send({ 
            id: rows.insertId,
            name,
            salary
         })  
    } catch (error) {
        return res.status(500).json({
        message: 'Something goes wrong'
        })     
    }
}

export const deleteEmployee = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM employee WHERE id = ?', [req.params.id])
        if (result.affectedRows <=0) return res.status(404).json({
            message: 'employee not found'
        })
        //si la consulta es correcta, es decir si se elimina el registro, sólo mandamos el estado 204 para que el cliente lo sepa(se puede eliminar, pero no se devuelve nada)
        res.sendStatus(204)   
    } catch (error) {
        return res.status(500).json({
        message: 'Something goes wrong'
        }) 
    }
}

export const updateEmployee = async (req, res) => {
    // const id = req.params.id
    const {id} = req.params
    const {name, salary} = req.body
    //                                                             ifnull, si se le pasa un valor lo toma, si no, no lo toma si no que lo deja con el valor quie tenía.
    try {
        const [result] = await pool.query('UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?', [name, salary, id])
        console.log(result)
    
        if (result.affectedRows === 0) return res.sendStatus(404).json({
            messsage: 'employee not found'
        })
        const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?' , [id])
    
        res.json(rows[0])
        
    } catch (error) {
        return res.status(500).json({
        message: 'Something goes wrong'
        }) 
    }
}

