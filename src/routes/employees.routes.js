import { Router } from "express"; // para crear sección de rutas o agrupar todas las rutas...
import { getEmployees , createEmployee, updateEmployee, deleteEmployee, getEmployee } from "../controllers/employees.controller.js";


//crear enrutador
const router = Router()

//grupos de rutas (usamos router en lugar de app)
router.get('/employees', getEmployees)

router.get('/employees/:id', getEmployee) // ponemos parametro /:id, en este caso el id del employee que queramos ver


router.post('/employees', createEmployee)

router.put('/employees', updateEmployee)

router.delete('/employees/:id', deleteEmployee)

// y ok, una vez terminamos de escribir rutas, exportamos grupo de rutas creado
export default router