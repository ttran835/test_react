import React, { Component } from 'react';
import Axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, signIn } from '../actions/index';

/* component */

import NavBar from './NavBar/NavBar';
import Hero from './Hero/Hero';

export default function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.logged);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <h1>This is a Test for Counter: {counter}</h1>
          <button onClick={() => dispatch(increment(2))}>+</button>
          <button onClick={() => dispatch(decrement(2))}>-</button>
          <button onClick={() => dispatch(signIn())}>Sign In</button>
          {isLogged ? <h2>Hello This should work</h2> : ''}
        </div>
      </div>
    </div>
  );
}
