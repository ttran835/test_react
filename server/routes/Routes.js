const Routes = require('express').Router();
const { mockDataController } = require('../controller/mockDataController');

Routes.route('/')
  .get(mockDataController.get)
  .post(mockDataController.post);

module.exports = Routes;
