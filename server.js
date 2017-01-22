'use strict';
// loads enviroment variables
require('dotenv').config();

// Third Party requirements
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// local requirements
const config = require('./config/index');

mongoose.connect(config.mongoURI);

// configure midddlewares
app.use(bodyParser.json());

app.use(bodyParser.json({
  type: 'application/json'
}));

app.use('/public', express.static(__dirname + '/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

require('./routes/index')(app);

var listener = app.listen(process.env.PORT || 3000, function() {
  console.log('Listening on port ' + listener.address().port);
});