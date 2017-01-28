var mongoose = require('mongoose');

// categories Schema
var categoriesSchema = mongoose.Schema({
    cat_id: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        required: true
    },
    parent: {
        type: Number,
        default: null
    },
    create_date: {
        type: Date,
        default: Date.now
    }
})

var Categories = module.exports = mongoose.model('Categories', categoriesSchema);


//Update latest_categories
var updateLatestCategories = function(callback, data){
    console.log('Category change detected');
    var categories = [];
    Categories.find({parent: null}).lean().exec(function(err, doc) {
        categories = doc;
        for(var i = 0; i < categories.length; i++){

            var parentId = Number(categories[i].cat_id);
            Categories.find({parent: parentId}).lean().exec(function(err, data) {
                categories[i].subCategories = i;
            })
        }
        console.log('categories: ', categories);
    })
}

//Get Categories
module.exports.getCategories = function(callback, limit){
    Categories.aggregate( [
       { $match: { "parent": null } },
       {
          $graphLookup: {
            from: "categories",
            startWith: "$cat_id",
            connectFromField: "cat_id",
            connectToField: "parent",
            as: "subCategory",
            maxDepth: 2,
            depthField: "parent"
            }
       }
    ], callback )
}

//Get Category by ID
module.exports.getCategoryById = function(id, callback){
    Categories.find({"cat_id": id}, callback);
}

//Get Category by Parent
module.exports.getCategoriesByParentId = function(id, callback){
    if (id != Number || id == undefined || id == 'null' || id == 'undefined' || id == '' || !id) {id = null}
    Categories.find({"parent": id}).lean().exec(function(err, docs){
        callback(docs);
    })
}

//Add Category
module.exports.addCategory = function(category, callback){
    Categories.create(callback);
}

//Update Category
module.exports.updateCategory = function(id, category, options, callback){
    var query = {'cat_id':id};
    var update = {
        title: category.name,
        status: category.email,
        parent: category.status
    }
    Categories.findOneAndUpdate(query, update, options, callback);
}

//Delete Category
module.exports.deleteCategory = function(id, callback){
    var query = {'cat_id':id};
    Categories.remove(query, callback);
}



