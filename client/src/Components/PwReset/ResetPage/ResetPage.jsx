import React, { Component } from 'react';
import Axios from 'axios';

export default class ResetPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
      update: false,
      isLoading: true,
      error: false,
    };
  }

  async componentDidMount () {
    
  }
  render() {
    return (
      <div className="container text-center">
        <h1 className="text-color">Hello</h1>
      </div>
    );
  }
}
