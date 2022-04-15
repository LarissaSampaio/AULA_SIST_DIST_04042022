import controller from "../controllers/bandas.js";
const nameRoute = 'bandas'

export default function(app,config){

    app
    .route(config.get("server.path_root") + nameRoute)
    .get(controller.showList);

    app
    .route(config.get("server.path_root") + nameRoute)
    .post(controller.add);

    app
    .route(config.get("server.path_root") + nameRoute)
    .put(controller.update);
    
    app
    .route(config.get("server.path_root") + nameRoute)
    .delete(controller.delete);

    console.log(`Rota ${nameRoute} carregada..`)
}