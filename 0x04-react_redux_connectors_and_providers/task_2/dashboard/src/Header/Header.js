import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/holberton-logo.jpg';

// Definition of styles
const styles = StyleSheet.create({
  AppHeader: {
    color: '#e11d3f',
    display: 'flex',
    alignItems: 'center',
  },
  imgSize: {
    height: '10rem',
    width: '10rem',
    '@media (min-width: 900px)': {
      height: '15rem',
      width: '15rem',
    },
  },
  titleDiv: {
    flexDirection: 'column',
    marginLeft: '2rem',
    textAlign: 'left',
    color: 'black',
    ':nth-child(1n) > h1': {
      fontSize: '1.5rem',
      '@media (min-width: 900px)': {
        fontSize: '2rem',
      },
    },
  },
  button: {
    border: 'none',
    background: 'none',
    fontSize: '1rem',
  },
});

const Header = function Header({ isUserLoggedIn, user, logout }) {
  return (
    <header className={css(styles.AppHeader)}>
      <img className={css(styles.imgSize)} src={logo} alt="logo" />
      <div className={css(styles.titleDiv)}>
        <h1>School dashboard</h1>
        {isUserLoggedIn ? (
          <div id="logoutSection">
            <p>
              Welcome
              {' '}
              {user.email}
              {' '}
              <button
                type="button"
                className={css(styles.button)}
                onClick={logout}
              >
                (logout)
              </button>
            </p>
          </div>
        ) : null}
      </div>
    </header>
  );
};

Header.propTypes = {
  // Supposed to be checking based on user but using isUserLoggedIn instead
  isUserLoggedIn: PropTypes.bool,
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
  }),
  logout: PropTypes.func,
};

Header.defaultProps = {
  isUserLoggedIn: false,
  user: {},
  logout: () => {},
};

function mapStateToProps(state) {
  return {
    user: state.toJS().user,
    isUserLoggedIn: state.toJS().isUserLoggedIn,
  };
}

connect(mapStateToProps)(Header);

export default Header;
