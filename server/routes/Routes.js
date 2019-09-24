const Routes = require('express').Router();
const { UsersController } = require('../controller/usersController');
const { UserLoginsController } = require('../controller/userLoginController');

Routes.route('/fakeDataGen').post(UsersController.post);

Routes.route('/login').get(UserLoginsController.get);

Routes.route('/employees').get(UsersController.get);

module.exports = Routes;
