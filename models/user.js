var mongoose = require('mongoose');

// Users Schema

var userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
})

var User = module.exports = mongoose.model('User', userSchema);

//Get Users
module.exports.getUsers = function(callback, limit){
    User.find(callback).limit(limit);
}

//Get User by ID
module.exports.getUserById = function(id, callback){
    User.findById(id, callback);
}

//Add User
module.exports.addUser = function(user, callback){
    User.create(user, callback);
}

//Update User
module.exports.updateUser = function(id, user, options, callback){
    var query = {_id:id};
    var update = {
        username: user.username,
        email: user.email,
        phone: user.phone,
        gender: user.gender,
        address: user.address,
        status: user.status
    }
    User.findOneAndUpdate(query, update, options, callback);
}

//Delete User
module.exports.deleteUser = function(id, callback){
    var query = {_id:id};
    User.remove(query, callback);
}


