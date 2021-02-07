module.exports = (sequelize, Sequelize) => {
    const Bitacora = sequelize.define("bitacora", {
      fechaDeIncidencia: {
        type: Sequelize.DATEONLY
      },
      horaDeInciencia: {
        type: Sequelize.DATE
      },
      descripcion: {
        type: Sequelize.STRING,
        allowNull: false
      },
      fechaSolucion: {
        type: Sequelize.DATEONLY
      },
      horaSolucion: {
        type: Sequelize.DATE
      },
      estado: {
        type: Sequelize.STRING,
        allowNull: false
      }

      

      
    });
  
    return Bitacora;
  };