module.exports = (sequelize, Sequelize) => {
    const Plataforma = sequelize.define("plataforma", {
      plataforma: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });

    return Plataforma;
  };