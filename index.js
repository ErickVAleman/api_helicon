var express = require('express');
var cors = require('cors')
var app = express();

var upperPhrase = require('./controller/upperPhrase');
var port = process.env.PORT ? process.env.PORT : 3000;
var host = '127.0.0.1';


app.use(cors())
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

app.listen(port);
