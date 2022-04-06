import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import { AppContext } from '../App/AppContext';

export default function Footer() {
  return (
    <AppContext.Consumer>
      {(context) => (
        <section id="footer">
          Copyright
          {' '}
          {getFullYear()}
          {' - '}
          {getFooterCopy()}
          {
            context.user.isLoggedIn ? (
              <p>
                <a href="https://github.com/RLewis11769" target="_blank" rel="noreferrer">Contact us</a>
              </p>
            ) : null
          }
        </section>
      )}
    </AppContext.Consumer>
  );
}
