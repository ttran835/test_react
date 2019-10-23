const Sequelize = require('sequelize');
const { db } = require('../index');

/*  **  Access Level  **  */
/*  Level 1: Employee     */
/*  level 2: admin        */
/*  level 3: Execs        */

const UserLogins = db.define(
  'userlogins',
  {
    _id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    first: { type: Sequelize.STRING },
    last: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    username: { type: Sequelize.STRING },
    password: { type: Sequelize.STRING },
    resetPasswordToken: { type: Sequelize.STRING(1234) },
    resetPasswordExpires: { type: Sequelize.DATE },
  },
  {
    timeStamp: true,
  }
);

UserLogins.sync()
  .then(() => console.log('Synced with DB'))
  .catch(err => console.error(err));

module.exports = { UserLogins };
