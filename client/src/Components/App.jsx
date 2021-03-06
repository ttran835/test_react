import React, { Component } from 'react';
import Axios from 'axios';

/* component */

import NavBar from './NavBar/NavBar';
import Hero from './Hero/Hero';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  // to grab data
  componentDidMount() {}

  render() {
    return (
      <div className="main-wrapper">
        <nav className="navbar-expand-lg navbar-light bg-light">
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
            <span class="navbar-toggler-icon" />
          </button>
          <NavBar />
        </nav>
      </div>
    );
  }
}
