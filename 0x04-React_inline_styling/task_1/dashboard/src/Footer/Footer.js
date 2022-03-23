import React from 'react';
// import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils';

export default function Footer() {
  return (
    <section>
      <p>
        Copyright
        {' '}
        {getFullYear()}
        {' - '}
        {getFooterCopy()}
      </p>
    </section>
  );
}
