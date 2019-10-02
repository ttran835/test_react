/* checking correct user */

const setAuthHeader = user => {
  if (user && user.token) {
    return { Authorization: `Bear ${user.token}` };
  }
  return {};
};

module.exports = setAuthHeader;
