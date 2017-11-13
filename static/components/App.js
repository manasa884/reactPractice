/*
  ./static/components/App.js
*/

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import HomePage from '../pages/HomePage';
import CardPage from '../pages/CardPage';
import GridPage from '../pages/GridPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <div>
            <Route exact path = '/' component = {HomePage}></Route>
            <Route exact path = '/cardPage' component = {CardPage}></Route>
            <Route exact path = '/gridPage' component = {GridPage}></Route>
      	  </div>
        </Switch>
      </Router>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('reactEntry'));
