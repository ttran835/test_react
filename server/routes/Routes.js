const Routes = require('express').Router();
const { UsersController } = require('../controller/usersController');

Routes.route('/fakeDataGen').post(UsersController.post);

Routes.route('/login').get(UsersController.get);

Routes.route('/').get(UsersController.get);

module.exports = Routes;
