import React, { Component } from 'react';
import Axios from 'axios';
import { Link, Route } from 'react-router-dom';
import PwReset from '../PwReset/PwReset.jsx';
import setAuthHeader from '../../../../_services/authenticate-header.service.js';
import handleResponse from '../../../../_Helper/handle-response.js';

/* Should all of these be handled here Write logic for showing messages. */

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      correctPw: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitChange = this.submitChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  submitChange(e, state) {
    const { username, password } = state;
    const { history } = this.props;
    Axios.post('/api/login/user', { params: { username, password } })
      .then((response) => {
        const user = response.data;
        Axios.get('/api/token', {
          headers: setAuthHeader(user),
          params: { username },
        })
          .then(handleResponse)
          .then((data) => {
            localStorage.setItem('user', JSON.stringify(data));
            history.push('/employees');
          });
      })
      .catch((err) => console.error(err));
    e.preventDefault();
  }

  render() {
    const { incorrectPw } = this.state;
    const wrongInfo = (
      <span className="text-color">
        You have enter the incorrect email or password. Please try again.
      </span>
    );

    return (
      <div className="container">
        <div className="row justify-content-sm-center">
          <div className="col-4 text-color">
            <form>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  className="form-control"
                  id="username"
                  aria-describedby="usernameHelp"
                  placeholder="Enter Username or Email"
                  onChange={this.handleChange}
                />
                <small id="emailHelp" className="form-text text-muted">
                  We&apos;ll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                />
              </div>
              <button
                onClick={(e) => this.submitChange(e, this.state)}
                type="submit"
                className="btn btn-primary">
                Submit
              </button>
              <Link to="/passwordReset">
                <button className="btn btn-primary">Reset Password</button>
              </Link>
              <Link to="/passwordReset">
                <button className="btn btn-primary">Reset Password</button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
