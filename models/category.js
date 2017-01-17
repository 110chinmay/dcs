var mongoose = require('mongoose');

// Category Schema
var categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
    status: {
        type: String,
        required: true
    },
    parent: {
        type: String
    }
    create_date: {
        type: Date,
        default: Date.now
    }
})

var Category = module.exports = mongoose.model('Category', categorySchema);

//Get Categories
module.exports.getCategory = function(callback, limit){
    Category.find(callback).limit(limit);
}

//Get Category by ID
module.exports.getCategoryById = function(id, callback){
    Category.findById(id, callback);
}

//Add Category
module.exports.addCategory = function(user, callback){
    Category.create(user, callback);
}

//Update Category
module.exports.updateCategory = function(id, category, options, callback){
    var query = {_id:id};
    var update = {
        name: category.name,
        status: category.email,
        parent: category.status
    }
    Category.findOneAndUpdate(query, update, options, callback);
}

//Delete Category
module.exports.deleteCategory = function(id, callback){
    var query = {_id:id};
    Category.remove(query, callback);
}


