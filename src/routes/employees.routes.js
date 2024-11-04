import { Router } from "express"; // para crear sección de rutas o agrupar todas las rutas...

//crear enrutador
const router = Router()

//grupos de rutas (usamos router en lugar de app)
router.get('/employees', (req, res) => res.send('obteniendo empleados'))

router.post('/employees', (req, res) => res.send('creando empleados'))

router.put('/employees', (req, res) => res.send('actualizando empleados'))

router.delete('/employees', (req, res) => res.send('eliminando empleados'))

// y ok, una vez terminamos de escribir rutas, exportamos grupo de rutas creado
export default router