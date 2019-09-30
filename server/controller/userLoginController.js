/* For use login only */

require('dotenv').config();
const { UserLogins } = require('../../database/tables/userLogins');

const UserLoginsController = {
  get: (req, res) => {
    const { username, password } = req.query;
    UserLogins.findOne({
      where: { username, password },
    }).then(data => {
      res.status(200).send(data);
    }).catch(err => {
      console.error(err);
    });
  },

  post: (req, res) => {
    const {
      first, last, email, password, credential,
    } = req.body;

    UserLogins.create({
      first,
      last,
      email,
      username: email,
      password,
      credential,
    });
    res.status(201).send('Successfully Created new Login');
  },

  put: (req, res) => {},

  delete: (req, res) => {},
};

module.exports = { UserLoginsController };
