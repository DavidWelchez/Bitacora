const db = require("../models");
const Empleado = db.empleados;
const Op = db.Sequelize.Op;


exports.createEmpleado = (req, res) => {
 
  if (!req.body.empleado) {
    res.status(400).send({
      message: "No puede ir vacio"
    });
    return;
  }


  const empleado = {
    empleado: req.body.empleado
  };


  Empleado.create(empleado)
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


exports.findAllEmpleado = (req, res) => {
  const empleado = req.query.empleado;
  var condition = empleado ? { empleado: { [Op.like]: `%${empleado}%` } } : null;

  Empleado.findAll({ where: condition })
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


exports.findOneEmpleado = (req, res) => {
  const id = req.params.id;

  Empleado.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error"
      });
    });
};


exports.updateEmpleado = (req, res) => {
  const id = req.params.id;

  Empleado.update(req.body, {
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


exports.deleteEmpleado  = (req, res) => {
  const id = req.params.id;

  Empleado.destroy({
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

exports.deleteAllEmpleado = (req, res) => {
    Empleado.destroy({
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