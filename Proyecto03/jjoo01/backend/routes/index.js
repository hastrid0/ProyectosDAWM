var express = require('express');
var router = express.Router();

const Sedes = require('../models').sedes;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/sedes', function(req, res, next) {
  Sedes.findAll({
    attributes: { exclude: ["disciplinaNombre"] }
  })
    .then(sedes => {
      res.render('Sedes', { title: 'Sedes', arrSedes: sedes });
    })
    .catch(error => res.status(400).send(error))
})
router.get('/disciplinas', function(req, res, next) {
  res.render('disciplinas', { title: 'Disciplinas' });
})
router.get('/unasede', function(req, res, next) {
  res.render('unasede', { title: 'Chamonix' });
})
router.get('/biatlon', function(req, res, next) {
  res.render('biatlon', { title: 'Biatlon' });
})
module.exports = router;
