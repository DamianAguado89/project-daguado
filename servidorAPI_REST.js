var express = require('express');
var helmet = require('helmet');
var cors = require('cors');
var morgan = require('morgan');
const rfs = require('rotating-file-stream');
var path = require('path');
const port = 5001;

var app = express();

//Crea el logger
const streamLog = rfs.createStream("log.txt", {
    size: "10M",
    interval: "1d",
    compress: "gzip",
    path: path.join(__dirname, 'log')
});

app.use(morgan('combined', {stream: streamLog}));

app.use(cors({origin: `http://localhost:${port}`}));

app.use(helmet())

var router = express.Router();

app.get('/api/consulta1', (req, res)=>{
    console.log('header.host', req.header.host);
    console.log('originalUrl:', req.originalUrl);
    res.json([
        {
            nombre: "Cliente 1",
            apellido: "Apellido 1",
            edad: 54
        },
        {
            nombre: "Cliente 2",
            apellido: "Apellido 2",
            edad: 33
        },
        {
            nombre: "Cliente 3",
            apellido: "Apellido 3",
            edad: 74
        },
])
})

app.listen(port, function(){
    console.log(`El sitio APIs REST con Express se inicio satisfactoriamente en el puerto ${port}`)
})