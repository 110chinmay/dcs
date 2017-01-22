var express = require('express');

var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());
User = require('./models/user');
Adv = require('./models/adv');

// Connect to Mongoose
mongoose.connect('mongodb://rohit-dhore:rohit@cz123@ds015889.mlab.com:15889/dcs');

var db = mongoose.connection;

app.use('/public', express.static(__dirname + '/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.get('/*', function(req, res){
    res.sendfile('./public/angular/index.html');
});
app.get('/', function(req, res){
    res.sendfile('./public/angular/index.html');
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



//Get all ads
app.get('/api/ads', function(req, res){
    Adv.getAds(function(err, ads){
        if(err){
            throw err;
        }
        res.json(ads);
    })
});

//Get ad by id
app.get('/api/ads/:_id', function(req, res){
    Adv.getAdvById(req.params._id, function(err, adv){
        if(err){
            throw err;
        }
        res.json(adv);
    })
});

//Add new ad
app.post('/api/ads/', function(req, res){
    var adv = req.body;
    Adv.addAdv(adv, function(err, adv){
        if(err){
            throw err;
        }
        res.json(adv);
    })
});

//Update existing ad by id
app.put('/api/ads/:_id', function(req, res){
    var id = req.params._id;
    var adv = req.body;
    Adv.updateAdv(id, adv,{}, function(err, adv){
        if(err){
            throw err;
        }
        res.json(adv);
    })
});

//Delete existing ad
app.delete('/api/ads/:_id', function(req, res){
    var id = req.params._id;
    Adv.deleteAdv(id, function(err, adv){
        if(err){
            throw err;
        }
        res.json(adv);
    })
});
app.listen(3000);
console.log('Running on port 3000');