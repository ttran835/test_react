import { AppContainer } from 'react-hot-loader';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import React from 'react';
import { render } from 'react-dom';
import App from './Components/App.jsx';
import Login from './Components/Login/Login.jsx';
import PwReset from './Components/PwReset/PwReset.jsx';
import ResetPage from './Components/PwReset/ResetPage/ResetPage.jsx';
// import styles from '../dist/styles/main.css';

const renderApp = () => {
  render(
    <AppContainer>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/passwordReset" component={PwReset} />;
          <Route exact path="/reset" component={ResetPage} />
          <Route path="/" component={App} />
        </Switch>
      </Router>
    </AppContainer>,
    document.getElementById('app')
  );
};

renderApp();

if (module.hot) {
  module.hot.accept('./components/App', renderApp);
}
