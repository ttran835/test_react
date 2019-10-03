const jwt = require('jsonwebtoken');
const { UserLogins } = require('../../database/tables/userLogins');

const getToken = {
  get: (req, res) => {
    const { username } = req.query;
    let token = req.headers.authorization || false;
    if (token) {
      if (token.startsWith('Bearer ')) {
        // Remove Bearer from string
        token = token.slice(7, token.length);
      }

      jwt.verify(token, process.env.JSON_TOKEN, (err, decoded) => {
        if (err) {
          return res.json({
            success: false,
            message: 'Token is not valid',
          });
        }
        UserLogins.findOne({
          where: { username },
          attributes: ['username', 'first', 'last', 'credential'],
        })
          .then(user => {
            res.status(200).send(user);
          })
          .catch(err => console.log(err));
        req.decoded = decoded;
      });
    } else {
      return res.json({
        success: false,
        message: 'Auth token is not supplied',
      });
    }
  },
};

module.exports = { getToken };
