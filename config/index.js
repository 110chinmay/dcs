'use strict';

module.exports = {
  mongoURI: process.env.MONGOLAB_URI,
  roles: {
    USER: 'user',
    ADMIN: 'admin',
    PM: 'pm'
  }
};