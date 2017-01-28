'use strict';

function includeAllRoutes(app) {
  require('./ads-api.js')(app);
  require('./user-api.js')(app);
  require('./categories-api.js')(app);
  require('./views.js')(app);
}

module.exports = function(app) {
  includeAllRoutes(app);
};
