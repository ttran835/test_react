require('dotenv').config();
const Axios = require('axios');
const express = require('express');
const { mockData } = require('../../database/tables/mockData');

/* Api calls here */

const fakeEmployeeUrl = `https://${process.env.API_KEY}.mockapi.io/employee`;
const mockDataController = {
  get: (req, res) => {
    mockData  
      .findAll({})
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
          mockData.create({
            first: employee.First,
            last: employee.Last,
            email: employee.Email,
            department: employee.Department,
            company: employee.Company,
            expertise: employee.Expertise,
          });
        });
      })
      .then(response => {
        res.status(201).send('Information saved to DB');
      })
      .catch(err => console.error(err));
  },
};

module.exports = { mockDataController };
