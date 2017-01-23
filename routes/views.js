'use strict';

module.exports = (app) => {
  app.get('/*', function(req, res){
    res.sendfile('./public/angular/index.html');
  });
};
