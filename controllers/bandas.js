import bandasDB from "../data/bandas.js";
import { Low, JSONFile } from 'lowdb'

const adapter = new JSONFile("./bancoTeste.json")
const db = new Low(adapter)
db.read()

const controller = {

    showList: function(req, res) {
        res.status(200).json(db.data.bandas)
    },
    add: function(req,res){
        let {id, name, style} = req.body;
        db.data.bandas[id] = {id, name, style}
        //res.status(200).json({ status: "Ok"});
        db.write()
        res.status(200).json(db.data.bandas)
    },
    update: function(req,res){
        let {id, name, style} = req.body
        db.data.bandas[id] = {id, name, style}
        db.write()
        //res.status(200).json({ status: "Ok"});
        res.status(200).json(db.data.bandas)
    },
    delete: function(req,res){
        let id = req.body.id
        delete db.data.bandas[id]
        db.write()
        //res.status(200).json({ status: "Ok"});
        res.status(200).json(db.data.bandas)
    }
}

export default controller;