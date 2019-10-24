const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const user = require('./api/user/index.js');

if (process.env.NODE_ENV !== 'test') {
    app.use(morgan('dev'));
}

app.use(bodyParser.json());

app.use('/users', user);

app.get('/', function (req, res) {
    res.send('Hello World!\n');
});

module.exports = app;