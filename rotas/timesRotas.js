const express = require('express');
const roteador = express.Router();
const timesControlador = require('../controladores/timesControlador');

roteador.get('/times', timesControlador.obterTodosTimes);

module.exports = roteador;