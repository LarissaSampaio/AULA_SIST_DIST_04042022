const config = require("config")
const express = require("express")
const bodyParser = require("body-parser")

let port = config.get("server.port")

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const bandRoute = require("./routes/bandas")
bandRoute(app, config)

app.listen(port, function(){
    console.log(`Servidor rodando na porta ${port}`)
})

