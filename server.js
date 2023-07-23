//instanciamos express
const express = require('express');
//ejecutando express para inicializar nuestra app   npm i express
const app = express();
//instalamos   npm i http
const http = require('http');
//inicializa
const server = http.createServer(app);

const port = process.env.port || 3000;
app.set('port',port);

server.listen(3000,'192.168.1.9' || 'localhost', function(){
    console.log('http://localhost '+process.pid+ ' iniciada...');
}); 