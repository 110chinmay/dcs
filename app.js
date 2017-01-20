var express = require('express');

var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());
User = require('./models/user');


// Connect to Mongoose
mongoose.connect('mongodb://localhost/dcs');

var db = mongoose.connection;

app.get('/', function(req, res){
    res.send('Welcome to our Daily classified service');
});

//Get all users
app.get('/api/users', function(req, res){
    User.getUsers(function(err, users){
        if(err){
            throw err;
        }
        res.json(users);
    })
});

//Get user by id
app.get('/api/users/:_id', function(req, res){
    User.getUserById(req.params._id, function(err, user){
        if(err){
            throw err;
        }
        res.json(user);
    })
});

//Add new user
app.post('/api/users/', function(req, res){
    var user = req.body;
    User.addUser(user, function(err, user){
        if(err){
            throw err;
        }
        res.json(user);
    })
});

//Update existing user by id
app.put('/api/users/:_id', function(req, res){
    var id = req.params._id;
    var user = req.body;
    User.updateUser(id, user,{}, function(err, user){
        if(err){
            throw err;
        }
        res.json(user);
    })
});

//Delete existing user
app.delete('/api/users/:_id', function(req, res){
    var id = req.params._id;
    User.deleteUser(id, function(err, user){
        if(err){
            throw err;
        }
        res.json(user);
    })
});

app.listen(3000);
console.log('Running on port 3000');