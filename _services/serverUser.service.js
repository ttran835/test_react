const jwt = require('jsonwebtoken');

// This function needs to handle the user obj from data base.
async function authenicateUser(user, secret) {
  const { username } = user;
  const token = jwt.sign({ sub: username }, secret);
  const { password, createdAt, updatedAt, ...userWithoutPassword } = user;
  return { ...userWithoutPassword, token };
}

module.exports = authenicateUser;
