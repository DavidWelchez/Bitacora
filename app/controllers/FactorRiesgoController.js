const db = require("../models");
const FactorRiesgo = db.factorRiesgos;
const Op = db.Sequelize.Op;


exports.createFactorRiesgo = (req, res) => {
 
  if (!req.body.factor) {
    res.status(400).send({
      message: "No puede ir vacio"
    });
    return;
  }


  const factorRiesgo = {
    factor: req.body.factor,
    eventoRiesgoId: req.body.eventoRiesgoId

  };


  FactorRiesgo.create(factorRiesgo)
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


exports.findAllFactorRiesgo = (req, res) => {
  const factor = req.query.factor;
  var condition = factor ? { factor: { [Op.like]: `%${factor}%` } } : null;

  FactorRiesgo.findAll({ where: condition })
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


exports.findOneFactorRiesgo = (req, res) => {
  const id = req.params.id;

  FactoRiesgo.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error"
      });
    });
};


exports.updateFactorRiesgo = (req, res) => {
  const id = req.params.id;

  FactorRiesgo.update(req.body, {
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


exports.deleteFactorRiesgo = (req, res) => {
  const id = req.params.id;

  FactorRiesgo.destroy({
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

exports.deleteAllFactorRiesgo = (req, res) => {
    FactoRiesgo.destroy({
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