const db = require("../models");
const Plataforma = db.plataformas;
const Op = db.Sequelize.Op;


exports.createPlataforma = (req, res) => {
 
  if (!req.body.plataforma) {
    res.status(400).send({
      message: "No puede ir vacio"
    });
    return;
  }

  const plataforma = {
    plataforma: req.body.plataforma,
    incidenteId: req.body.incidenteId
  };


  Plataforma.create(plataforma)
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


exports.findAllPlataforma = (req, res) => {
  const plataforma = req.query.plataforma;
  var condition = plataforma ? { plataforma: { [Op.like]: `%${plataforma}%` } } : null;

  Plataforma.findAll({ where: condition })
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


exports.findOnePlataforma = (req, res) => {
  const id = req.params.id;

  Plataforma.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error"
      });
    });
};


exports.updatePlataforma = (req, res) => {
  const id = req.params.id;

  Plataforma.update(req.body, {
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


exports.deletePlataforma = (req, res) => {
  const id = req.params.id;

  TipoCuenta.destroy({
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

exports.deleteAllPlataforma = (req, res) => {
    Plataforma.destroy({
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