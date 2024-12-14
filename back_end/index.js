var express = require('express');
var router = express.Router();
var db = require('./db.js')

/* GET index. */ 
router.get('/', async (req, res, next) => {
  try {
    const funcionarios = await db.findAll();
    res.render('index', { title: 'Funcionarios', funcionarios });
  } catch (err) {
    next(err);
  }
})

module.exports = router;