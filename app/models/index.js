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



db.incidentes.hasMany(db.plataformas, { as: "plataformas" });
db.plataformas.belongsTo(db.incidentes, {
  foreignKey: "",
  as: "incidente",
});








module.exports = db;