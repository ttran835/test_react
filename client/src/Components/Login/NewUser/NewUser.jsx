import React, { Component } from 'react';
import Axios from 'axios';
import { withStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import ContactsIcon from '@material-ui/icons/Contacts';
import PasswordField from '../../Fields/PasswordField.jsx';

const styles = (theme) => ({
  root: {
    display: 'flex',
    'flex-direction': 'column',
    'justify-content': 'center',
  },
  margin: {
    margin: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
  },
});

class NewUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first: '',
      last: '',
      email: '',
      password: '',
      confirmPassword: '',
      confirmEmail: '',
      confirmPasswordField: true,
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitChange = this.submitChange.bind(this);
  }

  handleChange(e) {
    const { value, id } = e.target;
    this.setState({
      [id]: value,
    });
  }

  submitChange(e) {
    const { first, last, email, password } = this.state;
    const { history } = this.props;
    if (this.checkEmailAndPassword(this.state)) {
      Axios.post('/api/new-user', { params: { first, last, email, password } })
        .then((response) => {
          const user = response.data;
          console.log({ user });
          /* Something here to confirm account is create */
        })
        .catch((err) => console.error(err));
      e.preventDefault();
    } else {
      /* function to render something to say confirm stuff */
    }
  }

  /* get the state for email and password to check them against each other */
  checkEmailAndPassword(state) {
    const { email, password, confirmEmail, confirmPassword } = state;
    if (email === confirmEmail || password === confirmPassword) return true;
    return false;
  }

  render() {
    const { classes } = this.props;
    const { confirmPasswordField } = this.state;
    return (
      <Container className={classes.root} maxWidth="sm">
        <div className={classes.margin}>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <AccountCircle />
            </Grid>
            <Grid item>
              <TextField onChange={this.handleChange} label="Email" />
            </Grid>
            <Grid item>
              <PasswordField handleChange={this.handleChange} />
            </Grid>
          </Grid>
        </div>
        <div className={classes.margin}>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <AccountCircle />
            </Grid>
            <Grid item>
              <TextField onChange={this.handleChange} label="Confirm Email" />
            </Grid>
            <Grid item>
              <PasswordField
                confirmPasswordField={confirmPasswordField}
                handleChange={this.handleChange}
              />
            </Grid>
          </Grid>
        </div>
        <div className={classes.margin}>
          <Grid container spacing={2} alignItems="center" justify="flex-start">
            <Grid item>
              <ContactsIcon />
            </Grid>
            <Grid item>
              <TextField onChange={this.handleChange} label="First Name" />
            </Grid>
            <Grid item>
              <TextField onChange={this.handleChange} label="Last Name" />
            </Grid>
          </Grid>
        </div>
        <div className={classes.margin}>
          <Grid container spacing={2} justify="center" alignItems="center">
            <Grid item>
              <Button variant="contained" color="primary" className={classes.button} onClick={this.submitChange}>
                Submit
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    );
  }
}

export default withStyles(styles)(NewUser);
