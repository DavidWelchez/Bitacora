module.exports = (sequelize, Sequelize) => {
    const Empleado = sequelize.define("empleado", {
      empleado: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  
    return Empleado;
  };