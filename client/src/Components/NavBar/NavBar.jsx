import React from 'react';

/* 
  current routes 
  Routes.route('/fakeDataGen').post(UsersController.post);
  Routes.route('/login').get(UsersController.get);
  Routes.route('/').get(UsersController.get);  

*/

const NavBar = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark row">
      <a className="navbar-brand" href="#">
        Navbar
    </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
          </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
          </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Action
            </a>
              <a className="dropdown-item" href="#">
                Another action
            </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Something else here
            </a>
            </div>
          </li>
        </ul>
        <span className="navbar-text">
          <a className="" href="/login">
            Login
        </a>
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
