import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

/* This is typically how it should be defining the information */
const styles = (theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: '20px',
  },
  textField: {
    flexBasis: 200,
  },
});

class PasswordFieldWithAdornments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showPassword: false,
    };

    this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
    this.handleMouseDownPassword = this.handleMouseDownPassword.bind(this);
  }

  handleClickShowPassword() {
    const { showPassword } = this.state;
    this.setState({
      showPassword: !showPassword,
    });
  }

  handleMouseDownPassword(e) {
    e.preventDefault();
  }

  render() {
    const { handleChange, classes } = this.props;
    const { showPassword } = this.state;
    return (
      <FormControl className={clsx(classes.margin, classes.textField)}>
        <InputLabel htmlFor="adornment-password">Password</InputLabel>
        <Input
          id="password"
          type={showPassword ? 'text' : 'password'}
          onChange={handleChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={this.handleClickShowPassword}
                onMouseDown={this.handleMouseDownPassword}>
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      // <TextField
      //   className={`text-color ${margin}`}
      //   id="password"
      //   label="Password"
      //   placeholder="password"
      //   onChange={handleChange}
      // />
    );
  }
}

// const PasswordField = withStyles(PasswordFieldComponent);

export default withStyles(styles)(PasswordFieldWithAdornments);
