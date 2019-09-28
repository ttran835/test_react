import { AppContainer } from 'react-hot-loader';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import { render } from 'react-dom';
import App from './Components/App.jsx';
// import styles from '../dist/styles/main.css';


const renderApp = () => {
  render(<AppContainer>
    <Router>
      <App />
    </Router>
  </AppContainer>, document.getElementById('app'));
};

renderApp();

if (module.hot) {
  module.hot.accept('./components/App', renderApp);
}