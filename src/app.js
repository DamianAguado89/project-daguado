var express = require('express');
var config = require('./config');
var app = express();

//settings
app.set('port', config.port)

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//Routes
var clienteRoutes = require('./routes/clientes.routes');
app.use(clienteRoutes)
module.exports = app;