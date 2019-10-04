require('dotenv').config();
const { UserLogins } = require('../../database/tables/userLogins');

const forgotPassword = {
  get: (req, res) => {
    res.status(200).send('hello from forgotPassword');
  },

  post: (req, res) => {
    res.status(200).send('Hello from post ForgotPassword');
  },
};

module.exports = { forgotPassword };
