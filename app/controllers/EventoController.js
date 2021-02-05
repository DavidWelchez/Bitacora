const db = require("../models");
const Evento = db.eventos;
const Op = db.Sequelize.Op;


exports.createEvento = (req, res) => {
 
  if (!req.body.evento) {
    res.status(400).send({
      message: "No puede ir vacio"
    });
    return;
  }


  const evento = {
    evento: req.body.evento
  };


  Evento.create(evento)
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


exports.findAllEvento = (req, res) => {
  const evento = req.query.evento;
  var condition = evento ? { evento: { [Op.like]: `%${evento}%` } } : null;

  
  evento.findAll({ where: condition })
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


exports.findOneEvento = (req, res) => {
  const id = req.params.id;

  Evento.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error"
      });
    });
};


exports.updateEvento = (req, res) => {
  const id = req.params.id;

  Evento.update(req.body, {
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


exports.deleteEvento = (req, res) => {
  const id = req.params.id;

  Evento.destroy({
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

exports.deleteAllEvento = (req, res) => {
    Evento.destroy({
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