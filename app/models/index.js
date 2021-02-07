const dbConfig = require("../config/db.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.incidentes = require("./Incidente.js")(sequelize, Sequelize);
db.plataformas = require("./Plataforma.js")(sequelize, Sequelize);
db.eventoRiesgo = require("./EventoRiesgo.js")(sequelize, Sequelize);
db.factorRiesgos = require("./FactorRiesgo.js")(sequelize, Sequelize);
db.empleados = require("./Empleado.js")(sequelize, Sequelize);
db.proveedores = require("./Proveedor.js")(sequelize, Sequelize);
db.categoriaSoportes = require("./CategoriaSoporte.js")(sequelize, Sequelize);
db.eventos = require("./Evento.js")(sequelize, Sequelize);
db.bitacoras = require("./Bitacora.js")(sequelize, Sequelize);










//Relacion Incidente Plataformas
db.incidentes.hasMany(db.plataformas, { as: "plataformas" });
db.plataformas.belongsTo(db.incidentes, {
  foreignKey: "",
  as: "incidente",
});


//Relacion Evento Riesgo --Factor Riesgo
db.eventoRiesgo.hasMany(db.factorRiesgos, { as: "factorRiesgos" });
db.factorRiesgos.belongsTo(db.eventoRiesgo, {
  foreignKey: "eventoRiesgoId",
  as: "eventoRiesgo",
});


///RELACIONES CON BITACORA

//Plataforma -- Bitacora 
db.plataformas.hasMany(db.bitacoras, { as: "bitacorasp" });
db.bitacoras.belongsTo(db.plataformas, {
  foreignKey: "",
  as: "plataforma",
});

//Evento -- Bitacora
db.eventos.hasMany(db.bitacoras, { as: "bitacorase" });
db.bitacoras.belongsTo(db.eventos, {
  foreignKey: "",
  as: "evento",
});

//Empleado Reporto -- Bitacora
db.empleados.hasMany(db.bitacoras, { as: "bitacorase" });
db.bitacoras.belongsTo(db.empleados, {
  foreignKey: "atendioid",
  as: "reporto",
});

//Empleado Atendio -- Bitacora
db.empleados.hasMany(db.bitacoras, { as: "bitacorasa" });
db.plataformas.belongsTo(db.empleados, {
  foreignKey: "atendioID",
  as: "empleadoA",
});

// Proveedor -- Bitacora
db.proveedores.hasMany(db.bitacoras, { as: "bitacoraspro" });
db.bitacoras.belongsTo(db.proveedores, {
  foreignKey: "",
  as: "proveedor",
});

// Factor Riesgo -- Bitacora
db.factorRiesgos.hasMany(db.bitacoras, { as: "bitacorasf" });
db.bitacoras.belongsTo(db.factorRiesgos, {
  foreignKey: "",
  as: "factorRiesgo",
});
// 


module.exports = db;