const db = require("../models");
const Proveedor = db.proveedores;
const Op = db.Sequelize.Op;


exports.createProveedor = (req, res) => {
 
  if (!req.body.proveedor) {
    res.status(400).send({
      message: "No puede ir vacio"
    });
    return;
  }


  const proveedor = {
    proveedor: req.body.proveedor
  };


  Proveedor.create(proveedor)
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


exports.findAllProveedor = (req, res) => {
  const proveedor = req.query.proveedor;
  var condition = proveedor ? { proveedor: { [Op.like]: `%${proveedor}%` } } : null;

  Proveedor.findAll({ where: condition })
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


exports.findOneProveedor = (req, res) => {
  const id = req.params.id;

  Proveedor.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error"
      });
    });
};


exports.updateProveedor = (req, res) => {
  const id = req.params.id;

  Proveedor.update(req.body, {
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


exports.deleteProveedor = (req, res) => {
  const id = req.params.id;

  Proveedor.destroy({
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

exports.deleteAllProveedor = (req, res) => {
    Proveedor.destroy({
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