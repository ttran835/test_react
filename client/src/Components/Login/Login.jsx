import React, { Component } from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';

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
    Axios.get('/api/login/user', { params: { username, password } })
      .then(user => {
        const info = user.data;
        if (!info) {
          this.setState({
            correctPw: false,
          });
        } else {
          localStorage.setItem('user', JSON.stringify(info));
          history.push('/employees');
        }
      })
      .catch(err => console.error(err));
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
                onClick={e => this.submitChange(e, this.state)}
                type="submit"
                className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
