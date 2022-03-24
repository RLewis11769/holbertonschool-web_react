import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  Login: {
    marginLeft: '2rem',
    marginTop: '3rem',
  },
  form: {
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    fontSize: '1rem',
    border: '1px solid lightgrey',
    margin: '0 1rem',
    ':focus': {
      outline: 'none',
      border: '1px solid #e11d3f',
      padding: '0.5rem',
    },
  },
  button: {
    border: '1px solid lightgrey',
    borderRadius: '0.5rem',
    padding: '.5rem .75rem',
    ':hover': {
      outline: 'none',
      border: '1px solid #e11d3f',
    },
  },
});

export default function Login() {
  return (
    <div className={css(styles.Login)}>
      <p>Login to access the full dashboard</p>
      <div className={css(styles.form)}>
        <label htmlFor="email">
          Email:
          <input className={css(styles.input)} type="email" placeholder="Email" id="email" />
        </label>
        <label htmlFor="pw">
          Password:
          <input className={css(styles.input)} type="password" placeholder="Password" id="pw" />
        </label>
        <button className={css(styles.button)} type="button">OK</button>
      </div>
    </div>
  );
}
