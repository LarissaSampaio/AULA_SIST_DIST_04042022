//const config = require("config") igual a linha de baixo (mais usado)
import config from "config"
import express from "express"
import bodyParser from "body-parser"

let port = config.get("server.port")

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

import bandRoute from "./routes/bandas.js"
bandRoute(app, config)

app.listen(port, function(){
    console.log(`Servidor rodando na porta ${port}`)
})

