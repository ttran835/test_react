const Routes = require('express').Router();
const { mockDataController } = require('../controller/mockDataController');

Routes.route('/home').get(mockDataController.get);

Routes.route('/fakeDataGen').post(mockDataController.post);

module.exports = Routes;
