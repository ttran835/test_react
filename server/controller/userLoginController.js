/* For use login only */

require('dotenv').config();
const express = require('express');
const { UserLogins } = require('../../database/tables/userLogins');

const UserLoginsController = {
  get: (req, res) => {
    res.status(200).send('Hello from login get');
  },

  post: (req, res) => {
    UserLogins.create({
      first: user.First,
      last: user.Last,
      email: user.Email,
      username: user.Username,
      password: user.Password,
      credential: user.credential,
    });
    res.status(201).send('Successfully Created new Login');
  },

  put: (req, res) => {},

  delete: (req, res) => {},
};

module.exports = { UserLoginsController };
