var express = require('express');
const { Sequelize } = require('../models');
const juego = require('../models/juego');
const axios = require('axios');
var router = express.Router();

const myapp = 'jjoo-76aed'

const Sedes = require('../models').sede;
const Disciplinas = require('../models').disciplina
const Mascota = require('../models').mascota
const Ediciones = require('../models').juego
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//api sedes
//mostrar todas las sedes
router.get('/api/sedes', function(req, res, next) {
  Sedes.findAll({
    attributes: {exclude: ["updatedAt", "createdAt"] }
  })
  .then(sedes => {
      res.json(sedes);
  })
  .catch(error => res.status(400).send(error))
})
//Mostrar una sede
router.get('/api/sedes/:nombre', function(req, res, next) {
  let ide = req.params.nombre;
  Sedes.findOne({
    where: {nombre:ide}
  }) 
  .then(sedes => {
      res.json(sedes);
      console.log(mam)
  })
  .catch(error => res.status(400).send(error))
})

//Mostrar todas las ediciones
router.get('/api/sedes', function(req, res, next) {
  Sedes.findAll({
    attributes: {exclude: ["updatedAt", "createdAt"] }
  })
  .then(sedes => {
      res.json(sedes);
  })
  .catch(error => res.status(400).send(error))
})


// api disciplinas
router.get('/api/disciplinas', function(req, res, next) {
  Disciplinas.findAll({
    attributes: {exclude: ["updatedAt", "createdAt"] }
  })
  .then(disciplinas => {
      res.json(disciplinas);
  })
  .catch(error => res.status(400).send(error))
})

//obtener cada disciplina
router.get('/api/disciplinas/:id', function(req, res, next) {
  let ide = req.params.id;
  Disciplinas.findOne({
    where: {id:ide}
  }) 
  .then(disciplinas => {
      res.json(disciplinas);
      console.log(mam)
  })
  .catch(error => res.status(400).send(error))
})

// api mascotas
router.get('/api/mascotas', function(req, res, next) {
  Mascota.findAll({
    attributes: {exclude: ["updatedAt", "createdAt"] }
  })
  .then(disciplinas => {
      res.json(disciplinas);
  })
  .catch(error => res.status(400).send(error))
})

// api ediciones
router.get('/api/ediciones', function(req, res, next) {
  Ediciones.findAll({
    attributes: {exclude: ["updatedAt", "createdAt"] }
  })
  .then(disciplinas => {
      res.json(disciplinas);
  })
  .catch(error => res.status(404).json({ error }))
})

//obtener cada edicion
router.get('/api/ediciones/:id', function(req, res, next) {
  let ide = req.params.id;
  Ediciones.findOne({
    where: {id:ide}
  }) 
  .then(resp => {
      res.json(resp);
      console.log(mam)
  })
  .catch(error => res.status(404).json({ error }))
})
router.get('/api/atletas', (req, res, next) => {

  axios.get(`https://${myapp}-default-rtdb.firebaseio.com/atletas.json`)
  .then( resAxios => {
      res.json(resAxios.data)
  })
  .catch(err => console.log(err))

});
/*
router.get('/api/atletas/:grupo', (req, res, next) => {

  axios.get(`https://${myapp}-default-rtdb.firebaseio.com/atletas.json`)
  .then( resAxios => {
      res.json(resAxios.data)
  })
  .catch(err => console.log(err))

});
*/

router.get("/api/atletas/:grupo", (req, res, next) => {
  const grup = req.params.grupo;
  axios
    .get(`https://${myapp}-default-rtdb.firebaseio.com/atletas/${grup}.json`)
    
    .then((resAxios) => {
      
      res.json(resAxios.data);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
