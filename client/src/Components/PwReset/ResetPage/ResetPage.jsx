import React, { Component } from 'react';
import Axios from 'axios';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default class ResetPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
      resetPasswordToken: '',
      update: false,
      error: false,
    };

    this.updatePassword = this.updatePassword.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  updatePassword(e) {
    const { history } = this.props;
    const { username, password, resetPasswordToken } = this.state;
    e.preventDefault();
    // Statements to handle login info
    Axios.post('/update-password', { params: username, password, resetPasswordToken })
      .then((data) => console.log('something'))
      .catch((err) => console.error(err));
  }

  // handleError () {
  //   const
  // }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { username, password, resetToken, update } = this.state;
    const style = {
      margin: 15,
    };

    return (
      <div className="container text-center">
        <div className="row justify-content-sm-center">
          <div className="col-8">
            <h1 className="text-color txt-upper-case">Password Reset Information</h1>
          </div>
        </div>
        <div className="row justify-content-sm-center">
          <div className="col-6">
            <form>
              <TextField
                id="username"
                label="username"
                placeholder="username"
                onChange={this.handleChange}
              />
              <TextField
                id="password"
                label="Password"
                placeholder="password"
                onChange={this.handleChange}
              />
              <TextField
                id="resetPasswordToken"
                label="resetPasswordToken"
                placeholder="resetPasswordToken"
                onChange={this.handleChange}
                fullWidth
              />
              <br />
              <Button variant="contained" color="primary">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
