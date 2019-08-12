require('dotenv').config();
const Axios = require('Axios');
const express = require('express');
const { mockData } = require('../../database/tables/mockData');

/* Api calls here */
const mockDataController = {
  get: (req, res) => {
    res.status(200).send('hello from get');
  },

  post: (req, res) => {
    res.status(201).send('hello from post');
  },
};

module.exports = { mockDataController };
