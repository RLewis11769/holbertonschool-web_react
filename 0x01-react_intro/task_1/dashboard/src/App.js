import logo from './holbie-logo.jpg';
// import icon from './holbie-icon.ico';
import './App.css';
import React, { Component } from 'react';
import { getFullYear, getFooterCopy } from './utils';

export default class App extends Component {

  render() {
    return (
      <>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1>School dashboard</h1>
        </header>
        <body className='App-body'>
          <p>Login to access the full dashboard</p>
        </body>
        <footer className='App-footer'>
          <p>Copyright {getFullYear()} - {getFooterCopy(0)}</p>
        </footer>
      </>
    )
  }
}
