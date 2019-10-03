import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
/* component */
import Employees from './Employees/Employees.jsx';
import NavBar from './NavBar/NavBar.jsx';
import Homepage from './HomePage/HomePage.jsx';
import FourOhFour from './FourOhFour/FourOhFour.jsx';

// herlp
import checkLoggedin from '../../../_services/checkUserSession.service';
/*
  ToDo:
    Implement Authentication:
      Need helper function import =>
        Check if userObj exists => Redirect
      If trying to login, implement Redirect to login page is pw is wrong
        If pages are not found, redirect FourOhFour
      On Redirect => client back to homepage
*/

const App = () => {
  if (!checkLoggedin()) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="container">
      <Route path="/" component={NavBar} />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/employees" component={Employees} />;
        <Route component={FourOhFour} />
      </Switch>
    </div>
  );
};

export default App;
