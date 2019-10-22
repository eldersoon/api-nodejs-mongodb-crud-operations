const express = require('express'); // import express to create routes
const bodyParser = require('body-parser'); //import bp to app understand url parse

const app = express(); //create aplication

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

require('./app/controllers/index')(app);

app.listen(3000)

