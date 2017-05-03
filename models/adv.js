var mongoose = require('mongoose');

// Adv Schema
var advSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: Number,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    images: {
        type: Array,
        required: true
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
    fuel: {
        type: String
    },
    km_driven: {
        type: String
    },
    status: {
        type: String
    },
    name: {
        type: Object
    },
    phone: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    },
    views: {
        type: String
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
        category: Adv.category,
        price: Adv.price,
        description: Adv.description,
        images: Adv.images,
        year: Adv.year,
        brand: Adv.brand,
        model: Adv.model,
        fuel: Adv.fuel,
        km_driven: Adv.km_driven,
        status: Adv.status,
        name: Adv.name,
        phone: Adv.phone,
        city: Adv.city,
        location: Adv.location
    }
    Adv.findOneAndUpdate(query, update, options, callback);
}

//Delete Adv
module.exports.deleteAdv = function(id, callback){
    var query = {_id:id};
    Adv.remove(query, callback);
}


