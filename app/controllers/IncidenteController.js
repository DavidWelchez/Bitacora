const db = require("../models");
const Incidente = db.incidentes;
const Op = db.Sequelize.Op;


exports.createIncidente = (req, res) => {
 
  if (!req.body.incidente) {
    res.status(400).send({
      message: "No puede ir vacio"
    });
    return;
  }


  const incidente = {
    incidente: req.body.incidente
  };


  Incidente.create(incidente)
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


exports.findAllIncidente = (req, res) => {
  const incidente = req.query.incidente;
  var condition = incidente ? { incidente: { [Op.like]: `%${incidente}%` } } : null;

  Incidente.findAll({ where: condition })
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


exports.findOneIncidente = (req, res) => {
  const id = req.params.id;

  Incidente.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error"
      });
    });
};


exports.updateIncidente = (req, res) => {
  const id = req.params.id;

  Incidente.update(req.body, {
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


exports.deleteIncidente = (req, res) => {
  const id = req.params.id;

  Incidente.destroy({
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

exports.deleteAllIncidente = (req, res) => {
    Incidente.destroy({
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