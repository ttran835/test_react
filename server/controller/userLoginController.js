/* For use login only */

require('dotenv').config();
const { UserLogins } = require('../../database/tables/userLogins');
const authenicateUser = require('../../_services/serverUser.service');

const UserLoginsController = {
  get: (req, res) => {
    const { username } = req.query;
    UserLogins.findOne({
      where: { username },
      attributes: ['username', 'first', 'last', 'credential'],
    })
      .then((user) => {
        res.status(200).send(user);
      })
      .catch((err) => console.log(err));
  },

  post: (req, res) => {
    const { username, password } = req.body.params;
    UserLogins.findOne({
      where: { username, password },
    })
      .then((data) => {
        const user = data.dataValues;
        authenicateUser(user, process.env.JSON_TOKEN)
          .then((user) =>
            user
              ? res.json(user)
              : res.status(400).json({ message: 'Username or password is incorrect' }),
          )
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  },

  put: (req, res) => {},

  delete: (req, res) => {},
};

module.exports = { UserLoginsController };
