const checkLoggedin = () => !!localStorage.getItem('user');

module.exports = checkLoggedin;
