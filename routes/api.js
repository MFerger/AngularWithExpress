var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */

router.get('/', function(req, res, next){
  knex('pirates').then(function(pirates){
    res.json(pirates);
  })
})

router.post('/', function(req, res, next){
  knex('pirates').insert({
    name: req.body.name,
    accessory: req.body.accessory,
    poison: req.body.poison
  }).then(function(){
    console.log('yay');
  })
})

module.exports = router;
