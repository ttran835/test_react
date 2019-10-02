const Routes = require('express').Router();
const { UsersController } = require('../controller/usersController');
const { UserLoginsController } = require('../controller/userLoginController');

Routes.route('/employees').get(UsersController.get);
Routes.route('/fakeDataGen').post(UsersController.post);

Routes.route('/login/user').post(UserLoginsController.post);
// Routes.route('/user/new').post(UserLoginsController.post);

module.exports = Routes;
