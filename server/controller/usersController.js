require('dotenv').config();
const Axios = require('axios');
const express = require('express');
const { Users } = require('../../database/tables/users');

/* 
  Api calls here 
 
*/

const fakeEmployeeUrl = `https://${process.env.API_KEY}.mockapi.io/employee`;
const UsersController = {
  get: (req, res) => {
    Users.findAll({})
      .then(data => {
        res.status(200).send(data);
      })
      .catch(err => console.error(err));
  },

  post: (req, res) => {
    Axios.get(fakeEmployeeUrl)
      .then(response => {
        const employees = response.data;
        employees.forEach(employee => {
          Users.create({
            first: employee.First,
            last: employee.Last,
            email: employee.Email,
            department: employee.Department,
            company: employee.Company,
            expertise: employee.Expertise,
            username: employee.Username,
            password: employee.Password,
          });
        });
        res.status(201).send('Information saved to DB');
      })
      .catch(err => console.error(err));
  },
};

module.exports = { UsersController };
