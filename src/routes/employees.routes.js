import { Router } from "express"; // para crear sección de rutas o agrupar todas las rutas...
import { getEmployees , createEmployee, updateEmployee, deleteEmployee } from "../controllers/employees.controller.js";


//crear enrutador
const router = Router()

//grupos de rutas (usamos router en lugar de app)
router.get('/employees', getEmployees)

router.post('/employees', createEmployee)

router.put('/employees', updateEmployee)

router.delete('/employees', deleteEmployee)

// y ok, una vez terminamos de escribir rutas, exportamos grupo de rutas creado
export default router