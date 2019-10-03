const expressJwt = require('express-jwt');
require('dotenv').config();

const jwt = () => {
  return expressJwt({
    secret: process.env.JSON_TOKEN,
  }).unless({
    path: [
      // Any routes that do not need JWT
      '/login',
    ],
  });
};

module.exports = jwt;
