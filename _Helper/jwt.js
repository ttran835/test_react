const expressJwt = require('express-jwt');
require('dotenv').config();

const jwt = secret => {
  return expressJwt({ secret }).unless({
    path: [
      // Any routes that do not need JWT
      '/login',
    ],
  });
};

module.exports = jwt;
