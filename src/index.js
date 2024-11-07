// para poder requerir express vamos a usar los ecma script modules, lo hacemos de esta forma que es más moderna:
import express, { json } from 'express'

import employeesRoutes from './routes/employees.routes.js' //añadimos el grupo de rutas de employees desde routes/
                                                            //al ser export default, lo nombro como yo quiera
import indexRoutes from './routes/index.routes.js'

                                                            
const app = express()
// ..antes de que llegue a las rutas... 1º recibo los datos, luego los convierto a json (para que pueda entender el objeto json) y luego se pasan a las rutas ↓↓↓
app.use(express.json())

//para usar las rutas de employees
app.use(indexRoutes)
app.use('/api/',employeesRoutes) // colocamos prefijo api/ para todas las rutas de employees en el index

//funcion middleware para cuando se visite una aplicacion cliente busca una ruta que no exite localhost:3000/adfasdfdsa
app.use((req, res, next) => {
    res.status(400).json({
        message: 'endpoint not found'
    })
})

app.listen(3000)
console.log('server running on port 3000')