import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import PasswordField from '../../Fields/PasswordField.jsx';

const styles = (theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    'justify-content': 'center',
  },
  margin: {
    margin: theme.spacing(2),
  },
});

class NewUser extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <Container className={classes.root} maxWidth="sm">
        <FormControl className={classes.margin}>
          <InputLabel htmlFor="input-with-icon-adornment">With a start adornment</InputLabel>
          <Input
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
          />
        </FormControl>
        <PasswordField />
        <div className={classes.margin}>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <AccountCircle />
            </Grid>
            <Grid item>
              <TextField id="input-with-icon-grid" label="With a grid" />
            </Grid>
          </Grid>
        </div>
      </Container>
    );
  }
}

export default withStyles(styles)(NewUser);
