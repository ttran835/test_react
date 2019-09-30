import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Axios from 'axios';
import Employee from './Employee/Employee.jsx';
import Search from '../ManageEmployee/Search.jsx';

export default class Employees extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
    };

    this.getAllEmployees = this.getAllEmployees.bind(this);
  }

  // to grab data
  componentDidMount() {
    this.getAllEmployees();
  }

  getAllEmployees() {
    Axios.get('/api/employees').then(data => {
      this.setState({ employees: data.data });
    });
  }

  render() {
    const { employees } = this.state;
    return (
      <div className="row">
        <Search />
        <div className="col-12 text-color">
          <h3 className="uppercase">List of Employees</h3>
          <div className="row">
            {employees.map((employee, i) => (
              <Employee employee={employee} key={i} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
