const express = require('express');
const router = express.Router();
const controller = require('../controllers/saidaController');

router.post('/', controller.registrarSaida);

module.exports = router;