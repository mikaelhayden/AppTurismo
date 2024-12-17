var express = require('express');
var router = express.Router();
var PontosController = require('../controls/Pontoss.js');

router.get('/', PontosController.getPontos);
router.post('/', PontosController.createPontos);
router.get('/:id', PontosController.getonePontos);
router.get('/cpf/:id', PontosController.getonePontosID);
router.put('/:id', PontosController.updatePontos);
router.delete('/:id', PontosController.deletePontos);

module.exports = router;