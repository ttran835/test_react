const handleResponse = response => {
  // Need to check response status
  const user = response.data;
  const { authorization } = response.config.headers;
  if (response.statusText !== 'OK') {
    if ([401, 403].indexOf(response.status) !== -1) {
      // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
      localStorage.removeItem('user');
    }

    const error = response.statusText;
    return Promise.reject(error);
  }
  // Should return user as the final item;
  return { user, authorization };
};

module.exports = handleResponse;
