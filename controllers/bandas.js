module.exports = function(){
    const bandasDB = require("../data/bandas.json")

    const controller = {
        showList: function(req, res) {
            res.status(200).json(bandasDB);
        },
        add: function(req,res){
            let {id, name, style} = req.body;
            bandasDB.bandas.data[id] = {id, name, style}
            //res.status(200).json({ status: "Ok"});
            res.status(200).json(bandasDB);
        },
        update: function(req,res){
            let {id, name, style} = req.body;
            bandasDB.bandas.data[id] = {id, name, style}
            //res.status(200).json({ status: "Ok"});
            res.status(200).json(bandasDB);
        },
        delete: function(req,res){
            let id = req.body.id;
            delete bandasDB.bandas.data[id];
            //res.status(200).json({ status: "Ok"});
            res.status(200).json(bandasDB);
        }
    }
    return controller;
}