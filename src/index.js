// este archivo arranca todo y llama a app.

import app from './app.js'
import {PORT} from './config.js'

app.listen(PORT)
console.log('server running on port', PORT)