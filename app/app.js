const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const { logErrors, errorHandler, clientErrorHandler } = require('./error');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride());
app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

app.use('/', require('../routes/index'));
app.use('/api/v1', require('../routes/toUpperPhrase'));

module.exports = app