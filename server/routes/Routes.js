const Routes = require('express').Router();
const { UsersController } = require('../controller/usersController');
const { UserLoginsController } = require('../controller/userLoginController');
const { getToken } = require('../controller/getToken');
const { forgotPassword } = require('../controller/forgotPassword');
const { createUser } = require('../controller/createUser');
const checkToken = require('../../_Helper/verifyToken');

Routes.route('/employees').get(UsersController.get);
Routes.route('/fakeDataGen').post(UsersController.post);

Routes.route('/user').get(UserLoginsController.get);
Routes.route('/login/user').post(UserLoginsController.post);

Routes.route('/forgot-password').post(forgotPassword.post);
Routes.route('/update-password').put(forgotPassword.put);

Routes.route('/new/user').post(createUser.post);

Routes.route('/').get(getToken.get);
module.exports = Routes;
