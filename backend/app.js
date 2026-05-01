const express = require('express');
const cors = require('cors');

const produtoRoutes = require('./routes/produtoRoutes');
const entradaRoutes = require('./routes/entradaRoutes');
const saidaRoutes = require('./routes/saidaRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// ROTAS
app.use('/produtos', produtoRoutes);
app.use('/entradas', entradaRoutes);
app.use('/saidas', saidaRoutes);

module.exports = app;