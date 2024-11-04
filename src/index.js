// para poder requerir express vamos a usar los ecma script modules, lo hacemos de esta forma que es más moderna:
import express from 'express'

import employeesRoutes from './routes/employees.routes.js' //añadimos el grupo de rutas de employees desde routes/
                                                            //al ser export default, lo nombro como yo quiera
import indexRoutes from './routes/index.routes.js'

                                                            
const app = express()



//para usar las rutas de employees
app.use(indexRoutes)
app.use(employeesRoutes)

app.listen(3000)
console.log('server running on port 3000')