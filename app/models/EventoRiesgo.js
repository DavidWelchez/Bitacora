module.exports = (sequelize, Sequelize) => {
    const EventoRiesgo = sequelize.define("eventoRiesgo", {
      EventoRiesgo: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  
    return EventoRiesgo;
  };