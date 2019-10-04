import React, { Component } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

export default class PwReset extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      showError: false,
      messageFromServer: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.sendPasswordResetEmail = this.sendPasswordResetEmail.bind(this);
    this.newState = this.newState.bind(this);
  }

  handleChange(e) {
    const { name } = e.target;
    this.setState({
      [name]: e.target.value,
    });
  }

  newState(showError, msg) {
    this.setState({
      showError,
      messageFromServer: msg,
    });
  }

  sendPasswordResetEmail(e) {
    console.log('triggered');
    e.preventDefault();
    const { history } = this.props;
    const { email, showError } = this.state;
    if (email !== '') {
      Axios.post('/api/forgot-password')
        .then(res => {
          if (res.data === 'No information Found!') {
            this.newState(true, '');
          } else if (res.data === 'Recovery email already sent.') {
            this.newState(false, res.data);
          }
          if (showError) {
            console.log({ showError });
            history.push('/login');
          }
        })
        .catch(err => console.log(err));
    }
    this.newState(false, '');
  }

  render() {
    const { email, messageFromServer, showError } = this.state;
    return (
      <div className="container text-color">
        <div className="row justify-content-center">
          <div className="col-6">
            <h1 className="txt-upper-case header-1-font-size text-center">
              Enter your email to reset your password.
            </h1>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-6">
            <form>
              <div className="form-group">
                <label htmlFor="email">EMAIL</label>
                <input
                  id="email"
                  className="form-control"
                  value={email}
                  name="email"
                  onChange={this.handleChange}
                  placeholder="Email Address"
                />
                <button
                  onClick={this.sendPasswordResetEmail}
                  type="submit"
                  className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
            {showError && (
              <div>
                <p>Email is recognized. Please try again</p>
              </div>
            )}
            {messageFromServer === 'Recovery email sent' && (
              <div>
                <p>Email sucessfully sent. Please check your email.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
