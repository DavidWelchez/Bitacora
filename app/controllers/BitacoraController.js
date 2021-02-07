const db = require("../models");
const Bitacora = db.bitacoras;
const Op = db.Sequelize.Op;


exports.createBitacora = (req, res) => {
 
  if (!req.body.fechaDeIncidencia) {
    res.status(400).send({
      message: "No puede ir vacio"
    });
    return;
  }


  const bitacora = {
    fechaDeIncidencia: req.body.fechaDeIncidencia,
    horaDeInciencia: req.body.horaDeInciencia,
    descripcion: req.body.descripcion,
    fechaSolucion: req.body.fechaSolucion,
    horaSolucion: req.body.horaSolucion,
    estado: req.body.estado,
    
  };


  Bitacora.createBitacora(bitacora)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error"
      });
    });
};


exports.findAllBitacora = (req, res) => {
  const fechaDeIncidencia = req.query.fechaDeIncidencia;
  var condition = fechaDeIncidencia ? { fechaDeIncidencia: { [Op.like]: `%${fechaDeIncidencia}%` } } : null;

  Bitacora.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error"
      });
    });
};


exports.findOneBitacora = (req, res) => {
  const id = req.params.id;

  Bitacora.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error"
      });
    });
};


exports.updateBitacora = (req, res) => {
  const id = req.params.id;

  Bitacora.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Actualizado!."
        });
      } else {
        res.send({
          message: `Error!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error"
      });
    });
};


exports.deleteBitacora = (req, res) => {
  const id = req.params.id;

  Bitacora.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Eliminado!"
        });
      } else {
        res.send({
          message: `Error`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error"
      });
    });
};

exports.deleteAllBitacora = (req, res) => {
  Bitacora.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `Eliminados!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error"
      });
    });
};