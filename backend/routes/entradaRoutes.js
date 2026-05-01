const express = require('express');
const router = express.Router();
const controller = require('../controllers/entradaController');

router.post('/', controller.registrarEntrada);

module.exports = router;