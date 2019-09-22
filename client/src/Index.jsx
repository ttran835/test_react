import React from 'react';
import { render } from 'react-dom';

import App from './components/App';
// import styles from '../dist/styles/main.css';

render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById('app')
);
