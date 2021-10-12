var express = require('express');
var router = express.Router();
var clienteController = require('../controllers/clientes.controller');

router.get('/cliente', clienteController.getCliente);

router.post('/cliente', clienteController.postClient);

router.get('/cliente/count', clienteController.getTotalCliente);

router.get('/cliente/:Cuil_C', clienteController.getClienteByCuil);

router.delete('/cliente/:Cuil_C', clienteController.deleteClienteByCuil);

router.put('/cliente/:IdCliente', clienteController.updateClienteByCuit);

module.exports = router;