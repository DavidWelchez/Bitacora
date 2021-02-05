module.exports = (sequelize, Sequelize) => {
    const Proveedor = sequelize.define("proveedor", {
      proveedor: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  
    return Proveedor;
  };