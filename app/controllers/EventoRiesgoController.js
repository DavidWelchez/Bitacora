const db = require("../models");
const EventoRiesgo = db.eventoRiesgo;
const Op = db.Sequelize.Op;


exports.createEventoRiesgo = (req, res) => {
 
  if (!req.body.EventoRiesgo) {
    res.status(400).send({
      message: "No puede ir vacio"
    });
    return;
  }


  const eventoRiesgo = {
    EventoRiesgo: req.body.EventoRiesgo
  };


  EventoRiesgo.create(eventoRiesgo)
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


exports.findAllEventoRiesgo = (req, res) => {
  const EventoRiesgo = req.query.EventoRiesgo;
  var condition = EventoRiesgo ? { EventoRiesgo: { [Op.like]: `%${EventoRiesgo}%` } } : null;

  EventoRiesgo.findAll({ where: condition })
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


exports.findOneEventoRiesgo = (req, res) => {
  const id = req.params.id;

  EventoRiesgo.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error"
      });
    });
};


exports.updateEventoRiesgo = (req, res) => {
  const id = req.params.id;

  EventoRiesgo.update(req.body, {
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


exports.deleteEventoRiesgo = (req, res) => {
  const id = req.params.id;

  EventoRiesgo.destroy({
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

exports.deleteAllEventoRiesgo = (req, res) => {
    EventoRiesgo.destroy({
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