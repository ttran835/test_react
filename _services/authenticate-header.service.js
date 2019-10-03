/* checking correct user */

const setAuthHeader = user => {
  if (user && user.token) {
    return { Authorization: `Bearer ${user.token}` };
  }
  return {};
};

module.exports = setAuthHeader;
