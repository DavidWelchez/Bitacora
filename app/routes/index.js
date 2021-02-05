const { plataformas } = require("../models/index.js");

module.exports = app => {
    const incidentes = require("../controllers/IncidenteController.js");
    const plataformas = require("../controllers/PlataformaController.js");
    const eventoRiesgos = require("../controllers/EventoRiesgoController.js");
    const factorRiesgos = require("../controllers/FactorRiesgoController.js");
    const Empleados = require("../controllers/EmpleadoController.js");
    const Proveedores = require("../controllers/ProveedorController.js");
    const CategoriaSoporte = require("../controllers/CategoriaSoporteController.js");
    const eventos = require("../controllers/EventoController.js");






    
  
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
    
    //Rutas Proveedor 
    router.post("/crear-Proveedor", Proveedores.createProveedor);
   
    router.get("/buscar-Proveedor", Proveedores.findAllProveedor);
  
    router.get("/buscar-Proveedor/:id", Proveedores.findOneProveedor);
  
    router.put("/actualizar-Proveedor/:id", Proveedores.updateProveedor);
  
    router.delete("/eliminar-Proveedor/:id", Proveedores.deleteProveedor);
  
    router.delete("/eliminartodo-Proveedor", Proveedores.deleteAllProveedor);

    //RUTAS CATEGORIA SOPORTE
    router.post("/crear-CategoriaSoporte", CategoriaSoporte.createCategoriaSoporte);
   
    router.get("/buscar-CategoriaSoporte", CategoriaSoporte.findAllCategoriaSoporte);
  
    router.get("/buscar-CategoriaSoporte/:id", CategoriaSoporte.findOneCategoriaSoporte);
  
    router.put("/actualizar-CategoriaSoporte/:id", CategoriaSoporte.updateCategoriaSoporte);
  
    router.delete("/eliminar-CategoriaSoporte/:id", CategoriaSoporte.deleteCategoriaSoporte);
  
    router.delete("/eliminartodo-CategoriaSoporte", CategoriaSoporte.deleteAllCategoriaSoporte);

    //RUTAS EVENTO

    router.post("/crear-Evento", eventos.createEvento);
   
    router.get("/buscar-Proveedor", eventos.findAllEvento);
  
    router.get("/buscar-Proveedor/:id", eventos.findOneEvento);
  
    router.put("/actualizar-Proveedor/:id", eventos.updateEvento);
  
    router.delete("/eliminar-Proveedor/:id", eventos.deleteEvento);
  
    router.delete("/eliminartodo-Proveedor", eventos.deleteAllEvento);


  
    app.use('/api/prueba', router);
  };