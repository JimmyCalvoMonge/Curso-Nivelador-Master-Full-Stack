const express = require('express');
const app = express();
const port = 3000;
var cowsay = require('cowsay');
const path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));  //Para mostrar un mensaje de bienvenida.
});

app.get('/input/:text', function(req, res) {
    res.send('<h1 style="text-align:center; color: #10558F;"> Fíjate en la consola para ver lo que dice la vaca. </h1>');
    console.log('Esto es lo que dice la vaca:')
    console.log(cowsay.say({
        text : req.params.text,
        e : "><", // Modificar los ojitos de la vaca
        T : "--" // Modificar la boca de la vaca ... lo encontré por ahí me pareció divertido.
        }));
  });

app.listen(port, function() {
  console.log(`La app está corriendo en el port: http://localhost:${port} abre esta dirección en tu navegador.`)
});