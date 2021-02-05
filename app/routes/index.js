const { plataformas } = require("../models/index.js");

module.exports = app => {
    const incidentes = require("../controllers/IncidenteController.js");
    const plataformas = require("../controllers/PlataformaController.js");
    const eventoRiesgos = require("../controllers/EventoRiesgoController.js");
    const factorRiesgos = require("../controllers/FactorRiesgoController.js");
    const Empleados = require("../controllers/EmpleadoController.js");



    
  
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
    
    //EVENTO RIESGO
    router.post("/crear-eventoRiesgos", eventoRiesgos.createEventoRiesgo );
   
    router.get("/buscar-eventoRiesgos", eventoRiesgos.findAllEventoRiesgo );
  
    router.get("/buscar-eventoRiesgos/:id", eventoRiesgos.findOneEventoRiesgo );
  
    router.put("/actualizar-eventoRiesgos/:id", eventoRiesgos.updateEventoRiesgo );
  
    router.delete("/eliminar-eventoRiesgos/:id", eventoRiesgos.deleteEventoRiesgo );
  
    router.delete("/eliminartodo-eventoRiesgos", eventoRiesgos.deleteAllEventoRiesgo );
    
    //Rutas FACTOR RIESGO
    router.post("/crear-factorRiesgos", factorRiesgos.createFactorRiesgo);
   
    router.get("/buscar-factorRiesgos", factorRiesgos.findAllFactorRiesgo);
  
    router.get("/buscar-factorRiesgos/:id", factorRiesgos.findOneFactorRiesgo);
  
    router.put("/actualizar-factorRiesgos/:id", factorRiesgos.updateFactorRiesgo);
  
    router.delete("/eliminar-factorRiesgos/:id", factorRiesgos.deleteFactorRiesgo);
  
    router.delete("/eliminartodo-factorRiesgos", factorRiesgos.deleteAllFactorRiesgo);



    //Rutas Empleados 
    router.post("/crear-Empleado", Empleados.createEmpleado);
   
    router.get("/buscar-Empleados", Empleados.findAllEmpleado);
  
    router.get("/buscar-Empleado/:id", Empleados.findOneEmpleado);
  
    router.put("/actualizar-Empleado/:id", Empleados.updateEmpleado);
  
    router.delete("/eliminar-Empleado/:id", Empleados.deleteEmpleado);
  
    router.delete("/eliminartodo-Empleado", Empleados.deleteAllEmpleado);
  
    app.use('/api/prueba', router);
  };