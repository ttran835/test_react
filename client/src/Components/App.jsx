import React, { Component } from 'react';
import Axios from 'axios';

/* component */
import NavBar from './NavBar/NavBar';
import Hero from './Hero/Hero';

/* 
  ToDo: 
    Implement Authentication:
    Implement CURD Application first
      Once CRUD application is done, move onto the next Item;

*/
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  // to grab data
  componentDidMount() {}

  render() {
    return (
      <div className="container">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <NavBar />
        </nav>
      </div>
    );
  }
}
