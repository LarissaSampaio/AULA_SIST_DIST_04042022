module.exports = function(app,config){
    const controllerFactory = require("../controllers/bandas")
    const controller = controllerFactory();

    app
    .route(config.get("server.path_root") + "bandas")
    .get(controller.showList);

    app
    .route(config.get("server.path_root") + "bandas")
    .post(controller.add);

    app
    .route(config.get("server.path_root") + "bandas")
    .patch(controller.update);
    
    app
    .route(config.get("server.path_root") + "bandas")
    .delete(controller.delete);
}