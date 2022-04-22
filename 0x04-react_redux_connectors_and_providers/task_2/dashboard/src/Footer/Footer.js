import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getFullYear, getFooterCopy } from '../utils/utils';

function Footer({ user }) {
  return (
    <section id="footer">
      Copyright
      {' '}
      {getFullYear()}
      {' - '}
      {getFooterCopy()}
      {
        user ? (
          <p>
            <a href="https://github.com/RLewis11769" target="_blank" rel="noreferrer">Contact us</a>
          </p>
        ) : null
      }
    </section>
  );
}

Footer.propTypes = {
  // Supposed to be checking based on user but using isUserLoggedIn instead
  isUserLoggedIn: PropTypes.bool,
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
  }),
};

Footer.defaultProps = {
  isUserLoggedIn: false,
  user: null,
};

function mapStateToProps(state) {
  return {
    user: state.toJS().user,
    isUserLoggedIn: state.toJS().isUserLoggedIn,
  };
}

connect(mapStateToProps)(Footer);

export default Footer;
