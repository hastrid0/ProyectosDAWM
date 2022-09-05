var express = require('express');
const axios = require('axios');
var router = express.Router();

const myapp = 'jjoo-76aed'

/* GET all. */
router.get('/api/atletas', (req, res, next) => {

    axios.get(`https://${myapp}-default-rtdb.firebaseio.com/atletas.json`)
    .then( resAxios => {
        res.json(resAxios.data)
    })
    .catch(err => console.log(err))
  
  });

  //https://jjoo-76aed-default-rtdb.firebaseio.com/atletas.json?orderBy="Grupo"&equalTo="Grupo 5"
  //https://jjoo-76aed-default-rtdb.firebaseio.com/atletas/"Grupo 3".json
  //curl -X GET https://jjoo-76aed-default-rtdb.firebaseio.com/atletas.json | json
  //curl -X GET https://jjoo-76aed-default-rtdb.firebaseio.com/atletas/7.json | json

/* GET one. */
router.get("/:grupo", (req, res, next) => {
    const grupo = req.params.grupo;
    axios
      .get(`https://${myapp}-default-rtdb.firebaseio.com/atletas/${grupo}.json`)
      .then((resAxios) => {
        res.json(resAxios.data);
      })
      .catch((err) => console.log(err));
  });
  
 
  module.exports = router;