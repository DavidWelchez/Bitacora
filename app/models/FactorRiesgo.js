module.exports = (sequelize, Sequelize) => {
    const FactoRiesgo = sequelize.define("factorRiesgo", {
      factor: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  
    return FactoRiesgo;
  };
  