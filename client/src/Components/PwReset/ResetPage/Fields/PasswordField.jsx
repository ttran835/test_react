import React from 'react';
import { withStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const style = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: '15px',
  },
  withoutLabel: {
    marginTop: '15px',
  },
  textField: {
    flexBasis: 200,
  },
};

const PasswordField = (props) => {
  return (
    <TextField
      className="text-color"
      id="password"
      label="Password"
      placeholder="password"
      onChange={props.handleChange}
    />
  );
};

// const PasswordField = withStyles(PasswordFieldComponent);

export default withStyles(style)(PasswordField);
