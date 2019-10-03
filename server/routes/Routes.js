const Routes = require('express').Router();
const { UsersController } = require('../controller/usersController');
const { UserLoginsController } = require('../controller/userLoginController');
const { getToken } = require('../controller/getToken');
const checkToken = require('../../_Helper/verifyToken');

Routes.route('/employees').get(UsersController.get);
Routes.route('/fakeDataGen').post(UsersController.post);

Routes.route('/user').get(UserLoginsController.get);
Routes.route('/login/user').post(UserLoginsController.post);

Routes.route('/').get(getToken.get);
module.exports = Routes;
