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






module.exports = db;