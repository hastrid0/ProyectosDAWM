var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/sedes', function(req, res, next) {
  res.render('sede', { title: 'Sedes' });
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
