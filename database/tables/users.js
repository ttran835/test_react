const { db } = require('../index');
const Sequelize = require('sequelize');

const Users = db.define(
  'users',
  {
    _id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    first: { type: Sequelize.STRING },
    last: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    department: { type: Sequelize.STRING },
    company: { type: Sequelize.STRING },
    expertise: { type: Sequelize.STRING },
    username: { type: Sequelize.STRING },
    password: { type: Sequelize.STRING },
  },
  {
    timeStamp: true,
  }
);

Users.sync()
  .then(() => console.log('Synced with DB'))
  .catch(err => console.error(err));

module.exports = { Users };
