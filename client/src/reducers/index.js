/* This is probably going to be the main reducer */
import counterReducer from './counterReducer';
import loggedReducer from './isLogged';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
  counter: counterReducer,
  logged: loggedReducer,
});

export default allReducers;
