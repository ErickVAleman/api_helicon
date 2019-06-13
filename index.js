var express = require('express');
var app = express();
var upperPhrase = require('./controller/upperPhrase');
var port = process.env.PORT_ENV ? process.env.PORT_ENV : 3000;
var host = '127.0.0.1';

app.get('/', (req, res) =>{
    console.log(req);
    res.status(200).send(`
        <h1>Api para cambiar a mayusculas las letras de una palabra</h1>
        <p>dirigete a <a href="/api/v1/upperPhrase">${ req.headers.host }/api/v1/upperPhrase<a/></p>
    `);
});

app.get('/api/v1/upperPhrase',(req, res) => {
   var toUpperPhrase = new upperPhrase(req, res);
   toUpperPhrase.setPhrase(req.query.phrase);
   return toUpperPhrase.getUpperPhrase()
});

app.listen(port,host);