import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

/* component */
import NavBar from './NavBar/NavBar.jsx';
import Employees from './Employees/Employees.jsx';
import Login from './Login/Login.jsx';
import Homepage from './HomePage/HomePage.jsx';
import FourOhFour from './FourOhFour/FourOhFour.jsx';
/*
  ToDo:
    Implement Authentication:
      Need helper function import =>
        Check if userObj exists => Redirect
      If trying to login, implement Redirect to login page is pw is wrong
        If pages are not found, redirect FourOhFour
      On Redirect => client back to homepage

    Routes.route('/fakeDataGen').post(UsersController.post);
    Routes.route('/login').get(UsersController.get);
    Routes.route('/').get(UsersController.get);



*/
const App = () => {

  const renderBody = () => (
    // Conditional Check;
    <Route path="/employees" component={Employees} />
  );

  const unauthorizedRedirect = () => { };

  return (
    <div className="container">
      <Route path="/" component={NavBar} />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/login" component={Login} />
        {renderBody()}
        <Route component={FourOhFour} />
      </Switch>
    </div>
  );
};

export default App;
