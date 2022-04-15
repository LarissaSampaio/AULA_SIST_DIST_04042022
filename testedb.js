import { Low, JSONFile } from 'lowdb'

const adapter = new JSONFile("bancoTeste.json")
const db = new Low(adapter)

await db.read().then(function(){
    console.log("Ok")

    db.data.bandas['BAN-04'] = {
        "id": "BAN-04",
        "name": "Criolo",
        "style": "Rap"
    }

    db.write()

    console.log("db.data", db.data)
    
}).catch(function(e){
    console.log(e)
})