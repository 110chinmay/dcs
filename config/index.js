'use strict';

module.exports = {
  mongoURI: process.env.DB_URI,
  roles: {
    USER: 'user',
    ADMIN: 'admin',
    PM: 'pm'
  }
};
