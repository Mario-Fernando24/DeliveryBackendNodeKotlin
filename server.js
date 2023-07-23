//instanciamos express
const express = require('express');
//ejecutando express para inicializar nuestra app   npm i express
const app = express();
//instalamos   npm i http
const http = require('http');
//inicializa
const server = http.createServer(app);
const logger = require('morgan');
const cors = require('cors');


const port = process.env.port || 3000;

//debuger los posibles errores
app.use(logger('dev'));
//parsear las respuesta json
app.use(express.json());
app.use(express.urlencoded({
    extended:true
  }));
app.use(cors());
//seguridad
app.disable('x-powered-by');
app.set('port',port);

server.listen(3000,'192.168.1.9' || 'localhost', function(){
    console.log('http://localhost '+process.pid+ ' iniciada...');
}); 

//ruta raiz
app.get('/',(req, res) => {
    res.send('Ruta raiz del backend');
 });

 //MANEJO DE ERRORES
app.use((err, req, res, next)=>{
    res.status(err.status || 500).send(err.stack);
});