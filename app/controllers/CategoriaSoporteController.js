const db = require("../models");
const CategoriaSoporte = db.categoriaSoportes;
const Op = db.Sequelize.Op;


exports.createCategoriaSoporte = (req, res) => {
 
  if (!req.body.categoria) {
    res.status(400).send({
      message: "No puede ir vacio"
    });
    return;
  }


  const categoriaSoporte= {
    categoria: req.body.categoria,

  };


  CategoriaSoporte.create(categoriaSoporte)
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


exports.findAllCategoriaSoporte = (req, res) => {
  const categoria = req.query.factor;
  var condition = categoria ? { categoria: { [Op.like]: `%${categoria}%` } } : null;

  CategoriaSoporte.findAll({ where: condition })
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


exports.findOneCategoriaSoporte = (req, res) => {
  const id = req.params.id;

  CategoriaSoporte.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error"
      });
    });
};


exports.updateCategoriaSoporte = (req, res) => {
  const id = req.params.id;

  CategoriaSoporte.update(req.body, {
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


exports.deleteCategoriaSoporte = (req, res) => {
  const id = req.params.id;

  CategoriaSoporte.destroy({
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

exports.deleteAllCategoriaSoporte = (req, res) => {
  
    CategoriaSoporte.destroy({
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