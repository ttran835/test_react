const Routes = require('express').Router();
const { UsersController } = require('../controller/usersController');
const { UserLoginsController } = require('../controller/userLoginController');

Routes.route('/fakeDataGen').post(UsersController.post);

Routes.route('/login:user').get(UserLoginsController.get);

Routes.route('/user/new').post(UserLoginsController.post);

Routes.route('/employees').get(UsersController.get);

module.exports = Routes;
