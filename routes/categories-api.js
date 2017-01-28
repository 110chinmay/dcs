'use strict';
const Categories = require('../models/categories');

module.exports = (app) => {
  //Get all categories
  app.get('/api/categories', function(req, res){
      Categories.getCategories(function(err, categories){
        if(err){
            throw err;
        }else {
          res.json(categories);
        }
    })
  });

  //Get category by id
  app.get('/api/categories/:_id', function(req, res){
      Categories.getCategoryById(req.params._id, function(err, category){
          if(err){
              throw err;
          }
          res.json(category);
      })
  });

  //Get category by id
  app.get('/api/categories/parent/:_id', function(req, res){
    Categories.getCategoriesByParentId(req.params._id, function(err, categories){
        if(err){
            throw err;
        }
        res.json(categories);
    })
  });

  //Add new category
  app.post('/api/categories/', function(req, res){
      var category = req.query;
      Categories.addCategory(category, function(err, category){
          if(err){
              throw err;
          }
          res.json(category);
      })
  });

  //Update existing category by id
  app.put('/api/categories/:_id', function(req, res){
      var id = req.params._id;
      var category = req.body;
      Categories.updateCategory(id, category,{}, function(err, category){
          if(err){
              throw err;
          }
          res.json(category);
      })
  });

  //Delete existing category
  app.delete('/api/categories/:_id', function(req, res){
      var id = req.params._id;
      Categories.deleteCategory(id, function(err, category){
          if(err){
              throw err;
          }
          res.json(category);
      })
  });
};
