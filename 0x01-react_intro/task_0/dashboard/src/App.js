import React from 'react';
import './App.css';
import logo from './holbie-logo.jpg';

export default function App() {
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
        <p>Copyright 2020 - holberton School</p>
      </footer>
    </>
  );
}
