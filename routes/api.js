var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */

router.get('/api/pirates', function(req, res, next){
  knex('pirates').then(function(pirates){
    res.json(pirates);
  })
})

module.exports = router;
