import React from 'react';
import './Login.css';

export default function Login() {
  return (
    <div id="Login">
      <p>Login to access the full dashboard</p>
      <label htmlFor="email">
        Email:
        <input type="email" placeholder="Email" id="email" />
      </label>
      <label htmlFor="pw">
        Password:
        <input type="password" placeholder="Password" id="pw" />
      </label>
      <button type="button">OK</button>
    </div>
  );
}
