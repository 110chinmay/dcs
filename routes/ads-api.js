'use strict';
const Adv = require('../models/adv');

module.exports = (app) => {
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
};
