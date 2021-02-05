module.exports = (sequelize, Sequelize) => {
    const Incidente = sequelize.define("incidente", {
      incidente: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  
    return Incidente;
  };