import React, { Component } from 'react';
import Axios from 'axios';

/* component */
import NavBar from './NavBar/NavBar';
import Hero from './Hero/Hero';
import Employees from './Employees/Employees';
import Search from './ManageEmployee/Search';

/* 
  ToDo: 
    Implement Authentication:
    Implement CURD Application first
      Once CRUD application is done, move onto the next Item;

    Routes.route('/fakeDataGen').post(UsersController.post);
    Routes.route('/login').get(UsersController.get);
    Routes.route('/').get(UsersController.get);  

*/
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
      user: '',
      password: '',
    };

    this.getAllEmployees = this.getAllEmployees.bind(this);
  }

  // to grab data
  componentDidMount() {
    this.getAllEmployees();
  }

  getAllEmployees() {
    Axios.get('/employees').then(data => {
      this.setState({ employees: data.data });
    });
  }


  render() {
    return (
      <div className="container">
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
          <NavBar />
        </nav>
        <div className="row">
          <Search />
          <Employees employees={this.state.employees}/>
        </div>
      </div>
    );
  }
}
