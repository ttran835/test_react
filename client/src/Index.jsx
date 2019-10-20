import { AppContainer } from 'react-hot-loader';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import React from 'react';
import { render } from 'react-dom';
import { withStyles } from '@material-ui/core';
import App from './Components/App.jsx';
import Login from './Components/Login/Login.jsx';
import PwReset from './Components/PwReset/PwReset.jsx';
import ResetPage from './Components/PwReset/ResetPage/ResetPage.jsx';
import NewUser from './Components/Login/NewUser/NewUser.jsx';
// import styles from '../dist/styles/main.css';

const renderApp = () => {
  render(
    <AppContainer>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exac path="/new_user" component={NewUser} />
          <Route exact path="/passwordReset" component={PwReset} />
          <Route path="/reset/:resetPasswordToken" component={ResetPage} />
          <Route path="/" component={App} />
        </Switch>
      </Router>
    </AppContainer>,
    document.getElementById('app'),
  );
};

renderApp();

if (module.hot) {
  module.hot.accept('./components/App', renderApp);
}
