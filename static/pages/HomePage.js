/*
  ./client/containers/HomePage.js
*/

import React from 'react';
import logo from '../images/logo.svg';
import RaisedButton from '../components/Button/RaisedButton';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Link } from 'react-router-dom'
import '../css/Home.css';

export default class HomePage extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <RaisedButton label="Test Card" primary={true} containerElement={<Link to='/cardPage'/>}/>
          <br/>
          <br/>
          <RaisedButton label="Test Grid"/>
        </div>
      </MuiThemeProvider>
    );
  }
}
