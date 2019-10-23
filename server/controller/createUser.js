require('dotenv').config();
const { UserLogins } = require('../../database/tables/userLogins');

const createUser = {
  post: (req, res) => {
    console.log(req.body.params);
    if (Object.keys(req.body).length === 0 && req.body.constructor === Object) {
      return res.json('Please enter correct information');
    }
    const {
      first, last, email, password,
    } = req.body.params;
    UserLogins.create({
      first,
      last,
      email,
      username: email,
      password,
    });
    res.status(201).send('Successfully Created new Login');
  },
};

module.exports = { createUser };
