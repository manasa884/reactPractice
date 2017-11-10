/*
  ./client/components/App.js
*/

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import HomePage from '../containers/HomePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <div>
            <Route exact path = "/" component = {HomePage}></Route>
      	  </div>
        </Switch>
      </Router>
    );
  }
}
