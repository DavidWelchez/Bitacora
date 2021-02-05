module.exports = (sequelize, Sequelize) => {
    const Evento = sequelize.define("evento", {
      evento: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  
    return Evento;
  };