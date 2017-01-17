var mongoose = require('mongoose');

// Adv Schema
var advSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    images: {
        type: Array
    },
    price: {
        type: String
    },
    year: {
        type: String
    },
    brand: {
        type: String
    },
    model: {
        type: String
    },
    year: {
        type: String
    },
    fuel: {
        type: String
    },
    km_driven: {
        type: String
    },
    description: {
        type: String
    },
    status: {
        type: String,
        required: true
    },
    createdBy: {
        type: Object
    }
    create_date: {
        type: Date,
        default: Date.now
    }
})

var Adv = module.exports = mongoose.model('Adv', advSchema);

//Get Categories
module.exports.getAds = function(callback, limit){
    Adv.find(callback).limit(limit);
}

//Get Adv by ID
module.exports.getAdvById = function(id, callback){
    Adv.findById(id, callback);
}

//Add Adv
module.exports.addAdv = function(user, callback){
    Adv.create(user, callback);
}

//Update Adv
module.exports.updateAdv = function(id, Adv, options, callback){
    var query = {_id:id};
    var update = {
        title: Adv.title,
        location: Adv.location,
        images: Adv.images,
        price: Adv.price,
        year: Adv.year,
        brand: Adv.brand,
        model: Adv.model,
        year: Adv.year,
        fuel: Adv.fuel,
        km_driven: Adv.km_driven,
        description: Adv.description,
        status: Adv.status
    }
    Adv.findOneAndUpdate(query, update, options, callback);
}

//Delete Adv
module.exports.deleteAdv = function(id, callback){
    var query = {_id:id};
    Adv.remove(query, callback);
}


