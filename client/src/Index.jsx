import { AppContainer } from 'react-hot-loader';
import React from 'react';
import { render } from 'react-dom';

import App from './Components/App.jsx';
// import styles from '../dist/styles/main.css';

render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById('app')
);
