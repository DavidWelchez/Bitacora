module.exports = (sequelize, Sequelize) => {
    const CategoriaSoporte = sequelize.define("categoriaSoporte", {
      categoria: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  
    return CategoriaSoporte;
  };
  