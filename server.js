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

// Configuring Passport
var expressSession = require('express-session');
app.use(expressSession({secret: 'mySecretKey'}));
var passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());

// Using the flash middleware provided by connect-flash to store messages in session
 // and displaying in templates
var flash = require('connect-flash');
app.use(flash());

// Initialize Passport
var initPassport = require('./passport/init');
initPassport(passport);


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
