const { plataformas } = require("../models/index.js");

module.exports = app => {
    const incidentes = require("../controllers/IncidenteController.js");
    const plataformas = require("../controllers/PlataformaController.js");
    
  
    var router = require("express").Router();
  
    //RUTAS INCIDENTES
    router.post("/crear-incidentes", incidentes.createIncidente);
   
    router.get("/buscar-incidentes", incidentes.findAllIncidente);
  
    router.get("/buscar-incidente/:id", incidentes.findOneIncidente);
  
    router.put("/actualizar-incidente/:id", incidentes.updateIncidente);
  
    router.delete("/eliminar-incidente/:id", incidentes.deleteIncidente);
  
    router.delete("/eliminartodo-incidente", incidentes.deleteAllIncidente);

    //RUTAS PLATAFORMA

    router.post("/crear-plataforma", plataformas.createPlataforma);
   
    router.get("/buscar-plataforma", plataformas.findAllPlataforma);
  
    router.get("/buscar-plataforma/:id", plataformas.findOnePlataforma);
  
    router.put("/actualizar-plataforma/:id", plataformas.updatePlataforma);
  
    router.delete("/eliminar-plataforma/:id", plataformas.deletePlataforma);
  
    router.delete("/eliminartodo-plataforma", plataformas.deleteAllPlataforma);

    

  
    app.use('/api/prueba', router);
  };