/* Example one of react-redux set up => very general and simple set up */

import React from 'react';
import { render } from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import allReducer from './reducers/index';

// Action => It is a function that simply returns an {};

// importing react Redux;
import { Provider } from 'react-redux';

// Reducer => Check what action we did in order to modify the state in the store.
// This will take the action and change it

// React Store
// import configureStore from './store';

let store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Display the action
// store.subscribe(() => console.log(store.getState()));

// Dispatch => The Dispatcher sends the info from action to the reducer and reducer changes the store.

import App from './components/App';
// import styles from '../dist/styles/main.css';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
