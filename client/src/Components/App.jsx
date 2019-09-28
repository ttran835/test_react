import React from 'react';
import { Route, Switch } from 'react-router-dom';

/* component */
import NavBar from './NavBar/NavBar.jsx';
import Employees from './Employees/Employees.jsx';
import Login from './Login/Login.jsx';
/*
  ToDo:
    Implement Authentication:
    Implement CURD Application first
      Once CRUD application is done, move onto the next Item;

    Routes.route('/fakeDataGen').post(UsersController.post);
    Routes.route('/login').get(UsersController.get);
    Routes.route('/').get(UsersController.get);

*/
const App = () => (
  <div className="container">
    <Route path="/" component={NavBar} />
    <Switch>
      <Route path="/login" component={Login} />
      {/* <Employees employees={this.state.employees} /> */}
      <Route path="/employee" component={(props) => <Employees {...props} />} />
    </Switch>
  </div>
);

export default App;
